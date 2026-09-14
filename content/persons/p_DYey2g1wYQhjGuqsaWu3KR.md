---
schema: wang-person/v1
id: p_DYey2g1wYQhjGuqsaWu3KR
status: active
merged_into: null
display_name: 王邵
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mTaGUFpke64BdtaUXWqQNk
        subject_person_id: p_DYey2g1wYQhjGuqsaWu3KR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dJCsDcWqJeNoJZDcskiTK2
          claim_id: c_mTaGUFpke64BdtaUXWqQNk
          source_id: s_CyqkJQjJgGQtCpbiQ1GM7m
          stance: supports
          locator: CBDB:251777
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（251777）
          source: &a1
            id: s_CyqkJQjJgGQtCpbiQ1GM7m
            source_type: api_record
            title: 中国历代人物传记资料库：王邵（CBDB 251777）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251777&o=json
            external_identifier: CBDB:251777
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.247Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4S4q3Jn64MDc2NGvhfJ7Ac
        subject_person_id: p_DYey2g1wYQhjGuqsaWu3KR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邵，明人物。成化十四年進士，籍贯麻城。（中国历代人物传记资料库 CBDB 251777）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OBjuOX5e1b6Yddp6QVY8wC
          claim_id: c_4S4q3Jn64MDc2NGvhfJ7Ac
          source_id: s_CyqkJQjJgGQtCpbiQ1GM7m
          stance: supports
          locator: CBDB:251777
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_sG2YuTf099XKxezB9XpWHx
        subject_person_id: p_6jw2H1KWkaDQExePFFB6Yj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DYey2g1wYQhjGuqsaWu3KR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mqe8hArU9l5wKvUPE4I3YO
          claim_id: c_sG2YuTf099XKxezB9XpWHx
          source_id: s_bUtaBofzw2bpRP6q4ylRVe
          stance: supports
          locator: CBDB：兄弟 王本儉（199945）之父／母 王孟良
          quotation: null
          interpretation_note: 由兄弟关系推断：王邵 与 王本儉 为同胞（CBDB 记「兄」），王本儉 之父／母即 王邵 之父／母。
          source:
            id: s_bUtaBofzw2bpRP6q4ylRVe
            source_type: api_record
            title: 中国历代人物传记资料库：王邵（CBDB 251777）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251777&o=json
            external_identifier: CBDB:251777
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6jw2H1KWkaDQExePFFB6Yj
        status: active
        display_name: 王孟良
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_CZPsEZIeSTnTDOroJW4_2-
        subject_person_id: p_9PrBQcpmCF997Qgs2oiS3t
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_DYey2g1wYQhjGuqsaWu3KR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0iyZaE7BzSJ9IVeyYgdFlF
          claim_id: c_CZPsEZIeSTnTDOroJW4_2-
          source_id: s_bUtaBofzw2bpRP6q4ylRVe
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199945 王本儉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bUtaBofzw2bpRP6q4ylRVe
            source_type: api_record
            title: 中国历代人物传记资料库：王邵（CBDB 251777）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251777&o=json
            external_identifier: CBDB:251777
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9PrBQcpmCF997Qgs2oiS3t
        status: active
        display_name: 王本儉
        merged_into_person_id: null
---

# 王邵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王邵 | accepted |
| bio.summary | 王邵，明人物。成化十四年進士，籍贯麻城。（中国历代人物传记资料库 CBDB 251777） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6jw2H1KWkaDQExePFFB6Yj | 王孟良 | accepted |
| other | p_9PrBQcpmCF997Qgs2oiS3t | 王本儉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王邵（CBDB 251777）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251777&o=json)
