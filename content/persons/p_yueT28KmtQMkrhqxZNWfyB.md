---
schema: wang-person/v1
id: p_yueT28KmtQMkrhqxZNWfyB
status: active
merged_into: null
display_name: 王張顯
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TvemYMxWZqmBs68TdrVJnP
        subject_person_id: p_yueT28KmtQMkrhqxZNWfyB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王張顯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KxXYV4brvffrjFF9szH85P
          claim_id: c_TvemYMxWZqmBs68TdrVJnP
          source_id: s_How8MD6Cy7qte4QGiWLXFF
          stance: supports
          locator: CBDB:690954
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（690954）
          source: &a1
            id: s_How8MD6Cy7qte4QGiWLXFF
            source_type: api_record
            title: 中国历代人物传记资料库：王張顯（CBDB 690954）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690954&o=json
            external_identifier: CBDB:690954
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.487Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Xvut6aCziyMKCgnPspStC2
        subject_person_id: p_yueT28KmtQMkrhqxZNWfyB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王張顯，明人物。籍贯黟縣，身份为收徒講學。（中国历代人物传记资料库 CBDB 690954）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dvhtzGd9Icm0lx2V2u3MWw
          claim_id: c_Xvut6aCziyMKCgnPspStC2
          source_id: s_How8MD6Cy7qte4QGiWLXFF
          stance: supports
          locator: CBDB:690954
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_4GLAI3ACZEFbtd_idMH_gI
        subject_person_id: p_yueT28KmtQMkrhqxZNWfyB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QeKezjrqjZ3pGuS4yx8R36
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hWKnxaHf4mfYhDfjEcPuWX
          claim_id: c_4GLAI3ACZEFbtd_idMH_gI
          source_id: s_FUpRVa8DUJPsKMfr5AoV61
          stance: supports
          locator: 嘉慶黟縣志，lgid=1166267：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FUpRVa8DUJPsKMfr5AoV61
            source_type: api_record
            title: 中国历代人物传记资料库：王大度（CBDB 690956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690956&o=json
            external_identifier: CBDB:690956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.488Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QeKezjrqjZ3pGuS4yx8R36
        status: active
        display_name: 王大度
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_8Bbe4qJ9CfYw5PHP3T6lnJ
        subject_person_id: p_X32wGVVhaUUGRFkrujk5PE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yueT28KmtQMkrhqxZNWfyB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TCO5TUVzDA-ioFq-Yid_aK
          claim_id: c_8Bbe4qJ9CfYw5PHP3T6lnJ
          source_id: s_tyun86djoFHSJiOOPOH9ln
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 690954 王張顯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_tyun86djoFHSJiOOPOH9ln
            source_type: api_record
            title: 中国历代人物传记资料库：王張榮（CBDB 690955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690955&o=json
            external_identifier: CBDB:690955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_X32wGVVhaUUGRFkrujk5PE
        status: active
        display_name: 王張榮
        merged_into_person_id: null
---

# 王張顯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王張顯 | accepted |
| bio.summary | 王張顯，明人物。籍贯黟縣，身份为收徒講學。（中国历代人物传记资料库 CBDB 690954） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_QeKezjrqjZ3pGuS4yx8R36 | 王大度 | accepted |
| other | p_X32wGVVhaUUGRFkrujk5PE | 王張榮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大度（CBDB 690956）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690956&o=json)
- [中国历代人物传记资料库：王張榮（CBDB 690955）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690955&o=json)
- [中国历代人物传记资料库：王張顯（CBDB 690954）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690954&o=json)
