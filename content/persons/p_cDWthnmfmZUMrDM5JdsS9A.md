---
schema: wang-person/v1
id: p_cDWthnmfmZUMrDM5JdsS9A
status: active
merged_into: null
display_name: 王十二
cbdb_id: 274559
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NyfQbg6k7jfKNGW2oA79NC
        subject_person_id: p_cDWthnmfmZUMrDM5JdsS9A
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王十二，史料所见人物。本项目依据《中国历代人物传记资料库：王十二（CBDB 274559）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_KupjUv36juw1_A7ZqcAqXt
          claim_id: c_NyfQbg6k7jfKNGW2oA79NC
          source_id: s_gC1Y8VVz5WzoURkNQC9JgQ
          stance: supports
          locator: CBDB:274559
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_gC1Y8VVz5WzoURkNQC9JgQ
            source_type: api_record
            title: 中国历代人物传记资料库：王十二（CBDB 274559）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274559&o=json
            external_identifier: CBDB:274559
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1ADuGByinNqdsDdx3uZMP3
        subject_person_id: p_cDWthnmfmZUMrDM5JdsS9A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王十二
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8eYTyETyX7gf2RVAEkYnGN
          claim_id: c_1ADuGByinNqdsDdx3uZMP3
          source_id: s_gC1Y8VVz5WzoURkNQC9JgQ
          stance: supports
          locator: CBDB:274559
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_HXh731ZS2LeJ1onQTtANsk
        subject_person_id: p_cDWthnmfmZUMrDM5JdsS9A
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RCL72tBj6tofvSVsLY2voQ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_npn0OaQR40XOt5eYBPs-Tf
          claim_id: c_HXh731ZS2LeJ1onQTtANsk
          source_id: s_gC1Y8VVz5WzoURkNQC9JgQ
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第九十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gC1Y8VVz5WzoURkNQC9JgQ
            source_type: api_record
            title: 中国历代人物传记资料库：王十二（CBDB 274559）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274559&o=json
            external_identifier: CBDB:274559
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_RCL72tBj6tofvSVsLY2voQ
        status: active
        display_name: 王希孟
        merged_into_person_id: null
  other: []
---

# 王十二

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王十二，史料所见人物。本项目依据《中国历代人物传记资料库：王十二（CBDB 274559）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王十二 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_RCL72tBj6tofvSVsLY2voQ | 王希孟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王十二（CBDB 274559）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274559&o=json)
