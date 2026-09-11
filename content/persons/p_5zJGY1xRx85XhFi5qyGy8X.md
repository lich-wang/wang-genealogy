---
schema: wang-person/v1
id: p_5zJGY1xRx85XhFi5qyGy8X
status: active
merged_into: null
display_name: 王章
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JKCkQ2A8f5CMRs3LQBBamf
        subject_person_id: p_5zJGY1xRx85XhFi5qyGy8X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7H7zo4WMQSGFJ5U83ShZAs
          claim_id: c_JKCkQ2A8f5CMRs3LQBBamf
          source_id: s_nsKoMQeADA93R5yDRUHfkV
          stance: supports
          locator: CBDB:60923
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（60923）
          source: &a1
            id: s_nsKoMQeADA93R5yDRUHfkV
            source_type: api_record
            title: 中国历代人物传记资料库：王章（CBDB 60923）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=60923&o=json
            external_identifier: CBDB:60923
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.880Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_vSgVP5DzJtQoiubQKcrGjh
        subject_person_id: p_5zJGY1xRx85XhFi5qyGy8X
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1601年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SCECuM93nQCiQEGB65GMJv
          claim_id: c_vSgVP5DzJtQoiubQKcrGjh
          source_id: s_nsKoMQeADA93R5yDRUHfkV
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_6woiMS4UUDa8xf8iZ9SKRG
        subject_person_id: p_5zJGY1xRx85XhFi5qyGy8X
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1644年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9L2bVDyFJTnnJufjR3RhkY
          claim_id: c_6woiMS4UUDa8xf8iZ9SKRG
          source_id: s_nsKoMQeADA93R5yDRUHfkV
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RZWaeBVmiRwmJ7fnfSjRdw
        subject_person_id: p_5zJGY1xRx85XhFi5qyGy8X
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王章（1601年—1644年），清人物。明清進士進士，籍贯武進，身份为死國難，入仕進士。（中国历代人物传记资料库 CBDB 60923）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Qd7ZYkcMNUiOm2PZ7rNLCs
          claim_id: c_RZWaeBVmiRwmJ7fnfSjRdw
          source_id: s_nsKoMQeADA93R5yDRUHfkV
          stance: supports
          locator: CBDB:60923
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_klopVtnYaG4qNMNl1fUAyq
        subject_person_id: p_5zJGY1xRx85XhFi5qyGy8X
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GU3s4118GxG2LN8CLNr6d3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wuGjAxVD1thGRZ8otYBH84
          claim_id: c_klopVtnYaG4qNMNl1fUAyq
          source_id: s_cdjeWtbDKRYdormNgVSx1J
          stance: supports
          locator: 武進陽湖縣志，lgid=152332：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_cdjeWtbDKRYdormNgVSx1J
            source_type: api_record
            title: 中国历代人物传记资料库：王之栻（CBDB 519659）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=519659&o=json
            external_identifier: CBDB:519659
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_GU3s4118GxG2LN8CLNr6d3
        status: active
        display_name: 王之栻
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_E4Spk3KLCYJ2BnZuzVnaui
        subject_person_id: p_5zJGY1xRx85XhFi5qyGy8X
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_DwPrXB4MVMvjEHCjAq7hAJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sucd8aieRNwgJu3dUko6GY
          claim_id: c_E4Spk3KLCYJ2BnZuzVnaui
          source_id: s_1sYuKAaiGztiU4zO8it-MK
          stance: supports
          locator: 武進陽湖縣志，lgid=152489：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1sYuKAaiGztiU4zO8it-MK
            source_type: api_record
            title: 中国历代人物传记资料库：姜氏(王章妻)（CBDB 699841）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699841&o=json
            external_identifier: CBDB:699841
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DwPrXB4MVMvjEHCjAq7hAJ
        status: active
        display_name: 姜氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王章 | accepted |
| birth.date | 1601年 | accepted |
| death.date | 1644年 | accepted |
| bio.summary | 王章（1601年—1644年），清人物。明清進士進士，籍贯武進，身份为死國難，入仕進士。（中国历代人物传记资料库 CBDB 60923） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_GU3s4118GxG2LN8CLNr6d3 | 王之栻 | accepted |
| spouses | p_DwPrXB4MVMvjEHCjAq7hAJ | 姜氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：姜氏(王章妻)（CBDB 699841）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699841&o=json)
- [中国历代人物传记资料库：王章（CBDB 60923）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=60923&o=json)
- [中国历代人物传记资料库：王之栻（CBDB 519659）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=519659&o=json)
