---
schema: wang-person/v1
id: p_TfSUDCjDByc2kg8tK9UUea
status: active
merged_into: null
display_name: 王璡
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K4aBnWFkYhJwEh6yU66dGB
        subject_person_id: p_TfSUDCjDByc2kg8tK9UUea
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dmQ45VUK7Cgm7BE3N5J8FG
          claim_id: c_K4aBnWFkYhJwEh6yU66dGB
          source_id: s_ngzu2kjKC5tvb3G6MKRrGY
          stance: supports
          locator: CBDB:550758
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（550758）
          source: &a1
            id: s_ngzu2kjKC5tvb3G6MKRrGY
            source_type: api_record
            title: 中国历代人物传记资料库：王璡（CBDB 550758）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550758&o=json
            external_identifier: CBDB:550758
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.567Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_DS4DEffjNtyWWEBF32YZ2K
        subject_person_id: p_TfSUDCjDByc2kg8tK9UUea
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1426年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p7AbtwSkCxGvahErvRQ2Qe
          claim_id: c_DS4DEffjNtyWWEBF32YZ2K
          source_id: s_ngzu2kjKC5tvb3G6MKRrGY
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
        id: c_C1U98JiVPkVYykNYCscNp7
        subject_person_id: p_TfSUDCjDByc2kg8tK9UUea
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璡（卒于1426年），明人物。籍贯蘇州府，曾任府學訓導、會試主考官、教諭。（中国历代人物传记资料库 CBDB 550758）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_inCjknpVSlJgYz2s8UOGPG
          claim_id: c_C1U98JiVPkVYykNYCscNp7
          source_id: s_ngzu2kjKC5tvb3G6MKRrGY
          stance: supports
          locator: CBDB:550758
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_6_gPKUKpuDiZwsLIdByMlk
        subject_person_id: p_TfSUDCjDByc2kg8tK9UUea
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AErBJCEERSbd6CuogcbqiX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mzyaHB5GZ_kruyLG3BBxhJ
          claim_id: c_6_gPKUKpuDiZwsLIdByMlk
          source_id: s_K2yscFMiwSjCWm9PHCCcHm
          stance: supports
          locator: 滸墅關志，lgid=176454：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_K2yscFMiwSjCWm9PHCCcHm
            source_type: api_record
            title: 中国历代人物传记资料库：王篪（CBDB 550766）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550766&o=json
            external_identifier: CBDB:550766
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.501Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AErBJCEERSbd6CuogcbqiX
        status: active
        display_name: 王篪
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王璡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璡 | accepted |
| death.date | 1426年 | accepted |
| bio.summary | 王璡（卒于1426年），明人物。籍贯蘇州府，曾任府學訓導、會試主考官、教諭。（中国历代人物传记资料库 CBDB 550758） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_AErBJCEERSbd6CuogcbqiX | 王篪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王篪（CBDB 550766）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550766&o=json)
- [中国历代人物传记资料库：王璡（CBDB 550758）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550758&o=json)
