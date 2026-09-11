---
schema: wang-person/v1
id: p_qHVPmDLgLbn56ct3eKkqpM
status: active
merged_into: null
display_name: 王倬
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PiZFq1qwr9HpCBkyaNWHaM
        subject_person_id: p_qHVPmDLgLbn56ct3eKkqpM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王倬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AgRoN9uiqbhA8SwTyhKXvu
          claim_id: c_PiZFq1qwr9HpCBkyaNWHaM
          source_id: s_yEFCfmWVRTNcRsLHFE4J6J
          stance: supports
          locator: CBDB:309373
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（309373）
          source: &a1
            id: s_yEFCfmWVRTNcRsLHFE4J6J
            source_type: api_record
            title: 中国历代人物传记资料库：王倬（CBDB 309373）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309373&o=json
            external_identifier: CBDB:309373
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.810Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AFECjmtRpzB8LGT1ogtZ7J
        subject_person_id: p_qHVPmDLgLbn56ct3eKkqpM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王倬，明人物。嘉靖二十六年進士，曾任兵部右侍郎、通議大夫。（中国历代人物传记资料库 CBDB 309373）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CBxhkqC_PIK1dbnR49GJWU
          claim_id: c_AFECjmtRpzB8LGT1ogtZ7J
          source_id: s_yEFCfmWVRTNcRsLHFE4J6J
          stance: supports
          locator: CBDB:309373
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_jFmopXLje6SrH-DPHONDQ0
        subject_person_id: p_qHVPmDLgLbn56ct3eKkqpM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_THQx38bKosUpdXRAkw2R2w
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UrUr65nJy9ZzVygPKzZr1U
          claim_id: c_jFmopXLje6SrH-DPHONDQ0
          source_id: s_yEFCfmWVRTNcRsLHFE4J6J
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第二甲第八十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_THQx38bKosUpdXRAkw2R2w
        status: active
        display_name: 王世貞
        merged_into_person_id: null
  other: []
---

# 王倬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王倬 | accepted |
| bio.summary | 王倬，明人物。嘉靖二十六年進士，曾任兵部右侍郎、通議大夫。（中国历代人物传记资料库 CBDB 309373） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_THQx38bKosUpdXRAkw2R2w | 王世貞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王倬（CBDB 309373）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309373&o=json)
