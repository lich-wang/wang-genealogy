---
schema: wang-person/v1
id: p_F5eJWEbAr7A8TPLP4MEWxZ
status: active
merged_into: null
display_name: 王士業
cbdb_id: 222410
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AC14cne55wq241S9RWp9aF
        subject_person_id: p_F5eJWEbAr7A8TPLP4MEWxZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士業，史料所见人物。本项目依据《中国历代人物传记资料库：王士業（CBDB 222410）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_gA4KOB7_vACAUIr1ndM9qo
          claim_id: c_AC14cne55wq241S9RWp9aF
          source_id: s_C9gTjBqW8ZfLCwvkN3sRxD
          stance: supports
          locator: CBDB:222410
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_C9gTjBqW8ZfLCwvkN3sRxD
            source_type: api_record
            title: 中国历代人物传记资料库：王士業（CBDB 222410）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222410&o=json
            external_identifier: CBDB:222410
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_aqpq7V6F8dKdt6EJMn1oJ7
        subject_person_id: p_F5eJWEbAr7A8TPLP4MEWxZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士業
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_X7MGWz852tZAFug6zqmW29
          claim_id: c_aqpq7V6F8dKdt6EJMn1oJ7
          source_id: s_C9gTjBqW8ZfLCwvkN3sRxD
          stance: supports
          locator: CBDB:222410
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_f7G65wmyUyyhwA_4zBOa4a
        subject_person_id: p_AxnhzouFhPDEcn88n2bfsw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_F5eJWEbAr7A8TPLP4MEWxZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AWUZcarGgZ_PdFylV9kdqM
          claim_id: c_f7G65wmyUyyhwA_4zBOa4a
          source_id: s_C9gTjBqW8ZfLCwvkN3sRxD
          stance: supports
          locator: 臨海縣志，lgid=353152：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_C9gTjBqW8ZfLCwvkN3sRxD
            source_type: api_record
            title: 中国历代人物传记资料库：王士業（CBDB 222410）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222410&o=json
            external_identifier: CBDB:222410
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_AxnhzouFhPDEcn88n2bfsw
        status: active
        display_name: 王宗沐
        merged_into_person_id: null
  children:
    - claim:
        id: c_NxOFvppmRP3G2mvjuEVMuM
        subject_person_id: p_F5eJWEbAr7A8TPLP4MEWxZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ESAiyK1MzC1QuuqZB5wjNx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dym45jEHnCw6VXM4GUvjqD
          claim_id: c_NxOFvppmRP3G2mvjuEVMuM
          source_id: s_YnYtAe2kQUeiijR7JwPiFM
          stance: supports
          locator: 臨海縣志，lgid=353152：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_YnYtAe2kQUeiijR7JwPiFM
            source_type: api_record
            title: 中国历代人物传记资料库：王立墀（CBDB 702328）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702328&o=json
            external_identifier: CBDB:702328
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.614Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ESAiyK1MzC1QuuqZB5wjNx
        status: active
        display_name: 王立墀
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王士業

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王士業，史料所见人物。本项目依据《中国历代人物传记资料库：王士業（CBDB 222410）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王士業 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_AxnhzouFhPDEcn88n2bfsw | 王宗沐 | accepted |
| children | p_ESAiyK1MzC1QuuqZB5wjNx | 王立墀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王立墀（CBDB 702328）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702328&o=json)
- [中国历代人物传记资料库：王士業（CBDB 222410）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222410&o=json)
