---
schema: wang-person/v1
id: p_Py4o4MSaFdQ83M1B2MuZ1Y
status: active
merged_into: null
display_name: 王鶴
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kDm7RJZydpAwD247giN29d
        subject_person_id: p_Py4o4MSaFdQ83M1B2MuZ1Y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鶴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LnHwY6tDxmKMaK5qh5ZZMu
          claim_id: c_kDm7RJZydpAwD247giN29d
          source_id: s_Dzr2yB7MrucVE6eZE3s3n6
          stance: supports
          locator: CBDB:325689
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（325689）
          source: &a1
            id: s_Dzr2yB7MrucVE6eZE3s3n6
            source_type: api_record
            title: 中国历代人物传记资料库：王鶴（CBDB 325689）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325689&o=json
            external_identifier: CBDB:325689
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.202Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KaH8tfDup76PjGbjhyMz7Y
        subject_person_id: p_Py4o4MSaFdQ83M1B2MuZ1Y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鶴，明人物。嘉靖三十八年進士，籍贯定遠。（中国历代人物传记资料库 CBDB 325689）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0DzIJ9XT3UClTG3Jrx4EgI
          claim_id: c_KaH8tfDup76PjGbjhyMz7Y
          source_id: s_Dzr2yB7MrucVE6eZE3s3n6
          stance: supports
          locator: CBDB:325689
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c__CwjjgRGRMmajEVqdCwFCP
        subject_person_id: p_Py4o4MSaFdQ83M1B2MuZ1Y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zZwvDUs3YgX6S9BozMt7RC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6FeTm7Xzm_NQBlf9lGuoKH
          claim_id: c__CwjjgRGRMmajEVqdCwFCP
          source_id: s_Dzr2yB7MrucVE6eZE3s3n6
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第一百七十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zZwvDUs3YgX6S9BozMt7RC
        status: active
        display_name: 王楫
        merged_into_person_id: null
    - claim:
        id: c_yHBlWAGwTbAtvvbrAVC6G7
        subject_person_id: p_Py4o4MSaFdQ83M1B2MuZ1Y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9FB2WTBQwjJn6fgFvnu2Ah
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OiKEaLI7rGDG5_qhFjLgRh
          claim_id: c_yHBlWAGwTbAtvvbrAVC6G7
          source_id: s_FigepNrFtXjHnEHUKCTUsV
          stance: supports
          locator: CBDB：兄弟 王楫（204909）之父／母 王鶴
          quotation: null
          interpretation_note: 由兄弟关系推断：王緯 与 王楫 为同胞（CBDB 记「弟」），王楫 之父／母即 王緯 之父／母。
          source:
            id: s_FigepNrFtXjHnEHUKCTUsV
            source_type: api_record
            title: 中国历代人物传记资料库：王緯（CBDB 325693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325693&o=json
            external_identifier: CBDB:325693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9FB2WTBQwjJn6fgFvnu2Ah
        status: active
        display_name: 王緯
        merged_into_person_id: null
    - claim:
        id: c_dnBJD1JjMUCzHPcelj2dPg
        subject_person_id: p_Py4o4MSaFdQ83M1B2MuZ1Y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vtVH2A2Vaj9Tb5xnzYiPZD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nCkn0atdJhBS9z3I3Mq9GE
          claim_id: c_dnBJD1JjMUCzHPcelj2dPg
          source_id: s_WsptdqE7iXkAQ7WBlpJBMh
          stance: supports
          locator: CBDB：兄弟 王楫（204909）之父／母 王鶴
          quotation: null
          interpretation_note: 由兄弟关系推断：王經 与 王楫 为同胞（CBDB 记「弟」），王楫 之父／母即 王經 之父／母。
          source:
            id: s_WsptdqE7iXkAQ7WBlpJBMh
            source_type: api_record
            title: 中国历代人物传记资料库：王經（CBDB 325692）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325692&o=json
            external_identifier: CBDB:325692
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vtVH2A2Vaj9Tb5xnzYiPZD
        status: active
        display_name: 王經
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鶴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鶴 | accepted |
| bio.summary | 王鶴，明人物。嘉靖三十八年進士，籍贯定遠。（中国历代人物传记资料库 CBDB 325689） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_zZwvDUs3YgX6S9BozMt7RC | 王楫 | accepted |
| children | p_9FB2WTBQwjJn6fgFvnu2Ah | 王緯 | accepted |
| children | p_vtVH2A2Vaj9Tb5xnzYiPZD | 王經 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鶴（CBDB 325689）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325689&o=json)
- [中国历代人物传记资料库：王經（CBDB 325692）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325692&o=json)
- [中国历代人物传记资料库：王緯（CBDB 325693）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325693&o=json)
