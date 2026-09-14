---
schema: wang-person/v1
id: p_4qyiGoTomPMaVqCYdNj2Re
status: active
merged_into: null
display_name: 王育民
cbdb_id: 302954
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PHoctcgUqgrZFAC6pFEPDS
        subject_person_id: p_4qyiGoTomPMaVqCYdNj2Re
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王育民，明人物。嘉靖二十年進士，籍贯清源，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任訓導。（中国历代人物传记资料库 CBDB 302954）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_vEE_U3kv2OCI4ng59cEP2s
          claim_id: c_PHoctcgUqgrZFAC6pFEPDS
          source_id: s_efREUvFdvhFMMXyin1KgHH
          stance: supports
          locator: CBDB:302954
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_efREUvFdvhFMMXyin1KgHH
            source_type: api_record
            title: 中国历代人物传记资料库：王育民（CBDB 302954）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302954&o=json
            external_identifier: CBDB:302954
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_T43JoicaAnsApcGUURKRxH
        subject_person_id: p_4qyiGoTomPMaVqCYdNj2Re
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王育民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9mCHvxkE5inZC56gbD3dhN
          claim_id: c_T43JoicaAnsApcGUURKRxH
          source_id: s_efREUvFdvhFMMXyin1KgHH
          stance: supports
          locator: CBDB:302954
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5HUpZF2h7CwmRNenwL0-Hq
        subject_person_id: p_icxXq3mTNniLra2C3qpkmV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4qyiGoTomPMaVqCYdNj2Re
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OUoddQC-_WdFbgPmpGMNWi
          claim_id: c_5HUpZF2h7CwmRNenwL0-Hq
          source_id: s_YEVkHD5ns21gPBtTSZa0HY
          stance: supports
          locator: CBDB：兄弟 王撫民（203316）之父／母 王佑
          quotation: null
          interpretation_note: 由兄弟关系推断：王育民 与 王撫民 为同胞（CBDB 记「兄」），王撫民 之父／母即 王育民 之父／母。
          source:
            id: s_YEVkHD5ns21gPBtTSZa0HY
            source_type: api_record
            title: 中国历代人物传记资料库：王育民（CBDB 302954）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302954&o=json
            external_identifier: CBDB:302954
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_icxXq3mTNniLra2C3qpkmV
        status: active
        display_name: 王佑
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_6SjONxyMROoloDo6ef6gh6
        subject_person_id: p_4qyiGoTomPMaVqCYdNj2Re
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hYn35dM9vxJfRx8fWZf7jx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Pdjz8GuStSOG9mhQcGh5MN
          claim_id: c_6SjONxyMROoloDo6ef6gh6
          source_id: s_YEVkHD5ns21gPBtTSZa0HY
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203316 王撫民）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_YEVkHD5ns21gPBtTSZa0HY
            source_type: api_record
            title: 中国历代人物传记资料库：王育民（CBDB 302954）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302954&o=json
            external_identifier: CBDB:302954
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hYn35dM9vxJfRx8fWZf7jx
        status: active
        display_name: 王撫民
        merged_into_person_id: null
---

# 王育民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王育民，明人物。嘉靖二十年進士，籍贯清源，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任訓導。（中国历代人物传记资料库 CBDB 302954） | accepted |
| name.primary | 王育民 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_icxXq3mTNniLra2C3qpkmV | 王佑 | accepted |
| other | p_hYn35dM9vxJfRx8fWZf7jx | 王撫民 | accepted |

## 外部来源

- [中国历代人物传记资料库：王育民（CBDB 302954）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302954&o=json)
