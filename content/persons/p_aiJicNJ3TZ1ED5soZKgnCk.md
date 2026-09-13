---
schema: wang-person/v1
id: p_aiJicNJ3TZ1ED5soZKgnCk
status: active
merged_into: null
display_name: 王惠軒
cbdb_id: 286915
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yvmLpSuFrihdkDZRCFkPoU
        subject_person_id: p_aiJicNJ3TZ1ED5soZKgnCk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惠軒，明人物。永樂十年進士。（中国历代人物传记资料库 CBDB 286915）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_lWge79bJODO9VA-3auc4ru
          claim_id: c_yvmLpSuFrihdkDZRCFkPoU
          source_id: s_esaG4QePU7fJzzdJkwZ7nP
          stance: supports
          locator: CBDB:286915
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_esaG4QePU7fJzzdJkwZ7nP
            source_type: api_record
            title: 中国历代人物传记资料库：王惠軒（CBDB 286915）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286915&o=json
            external_identifier: CBDB:286915
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_cN93fJ8fYDU3XS8ip7AJ2U
        subject_person_id: p_aiJicNJ3TZ1ED5soZKgnCk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惠軒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_aZ6YvvqUgtMb2Q6CxJpABc
          claim_id: c_cN93fJ8fYDU3XS8ip7AJ2U
          source_id: s_esaG4QePU7fJzzdJkwZ7nP
          stance: supports
          locator: CBDB:286915
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
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
        id: c_9u0ca2Tmrw3nDQC5kS4UV3
        subject_person_id: p_aiJicNJ3TZ1ED5soZKgnCk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_51C8Kh4aNymAeDywG3epKL
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0H9ywFxrjpFL1B1mX5XStn
          claim_id: c_9u0ca2Tmrw3nDQC5kS4UV3
          source_id: s_esaG4QePU7fJzzdJkwZ7nP
          stance: supports
          locator: 永樂十年進士登科錄:一卷，第三甲第十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_esaG4QePU7fJzzdJkwZ7nP
            source_type: api_record
            title: 中国历代人物传记资料库：王惠軒（CBDB 286915）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286915&o=json
            external_identifier: CBDB:286915
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_51C8Kh4aNymAeDywG3epKL
        status: active
        display_name: 王嗣先
        merged_into_person_id: null
  other: []
---

# 王惠軒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王惠軒，明人物。永樂十年進士。（中国历代人物传记资料库 CBDB 286915） | accepted |
| name.primary | 王惠軒 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_51C8Kh4aNymAeDywG3epKL | 王嗣先 | accepted |

## 外部来源

- [中国历代人物传记资料库：王惠軒（CBDB 286915）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286915&o=json)
