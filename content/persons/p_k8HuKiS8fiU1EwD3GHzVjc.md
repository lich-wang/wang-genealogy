---
schema: wang-person/v1
id: p_k8HuKiS8fiU1EwD3GHzVjc
status: active
merged_into: null
display_name: 王子完
cbdb_id: 268917
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9GA71YP5q9fHKVRF9kM3iC
        subject_person_id: p_k8HuKiS8fiU1EwD3GHzVjc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子完，明人物。中国历代人物传记资料库（CBDB）以人物编号 268917 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_TNe5CHRqxLDHI3TYwlD-fF
          claim_id: c_9GA71YP5q9fHKVRF9kM3iC
          source_id: s_TApQtnSWhYX2ywT6eqSy1Y
          stance: supports
          locator: CBDB:268917
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_TApQtnSWhYX2ywT6eqSy1Y
            source_type: api_record
            title: 中国历代人物传记资料库：王子完（CBDB 268917）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268917&o=json
            external_identifier: CBDB:268917
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_pRZvZ2bJYmFyWo8STDKNjq
        subject_person_id: p_k8HuKiS8fiU1EwD3GHzVjc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子完
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ZaieUq4661PxYpC9WhcT33
          claim_id: c_pRZvZ2bJYmFyWo8STDKNjq
          source_id: s_TApQtnSWhYX2ywT6eqSy1Y
          stance: supports
          locator: CBDB:268917
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_TApQtnSWhYX2ywT6eqSy1Y
            source_type: api_record
            title: 中国历代人物传记资料库：王子完（CBDB 268917）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268917&o=json
            external_identifier: CBDB:268917
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
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
        id: c_TTJxIAX2wLqEI_MsDiL0zq
        subject_person_id: p_k8HuKiS8fiU1EwD3GHzVjc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BNDHcwrQU46tvDsz7UJKUr
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZzAzF7wPAysoqfrOIqcoAa
          claim_id: c_TTJxIAX2wLqEI_MsDiL0zq
          source_id: s_LGyeE5TDnWyhmnVTgaqgAC
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第一百一十二名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LGyeE5TDnWyhmnVTgaqgAC
            source_type: api_record
            title: 中国历代人物传记资料库：王璽（CBDB 201213）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201213&o=json
            external_identifier: CBDB:201213
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.664Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BNDHcwrQU46tvDsz7UJKUr
        status: active
        display_name: 王璽
        merged_into_person_id: null
  other: []
---

# 王子完

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王子完，明人物。中国历代人物传记资料库（CBDB）以人物编号 268917 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王子完 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_BNDHcwrQU46tvDsz7UJKUr | 王璽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璽（CBDB 201213）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201213&o=json)
- [中国历代人物传记资料库：王子完（CBDB 268917）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268917&o=json)
