---
schema: wang-person/v1
id: p_pkraRhhFphQavzPodgyG7o
status: active
merged_into: null
display_name: 王友諒
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_goak3Tn6btpbY4mP2sYciW
        subject_person_id: p_pkraRhhFphQavzPodgyG7o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友諒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sQ83eVHAg6wcXGbXDKAbEe
          claim_id: c_goak3Tn6btpbY4mP2sYciW
          source_id: s_W9pcbM6x2UJK8KTpukC9t3
          stance: supports
          locator: CBDB:247642
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（247642）
          source: &a1
            id: s_W9pcbM6x2UJK8KTpukC9t3
            source_type: api_record
            title: 中国历代人物传记资料库：王友諒（CBDB 247642）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247642&o=json
            external_identifier: CBDB:247642
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.120Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qEEpTMUvjH1ZWwxMF3kZ3i
        subject_person_id: p_pkraRhhFphQavzPodgyG7o
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友諒，明人物。成化十一年進士，曾任府同知。（中国历代人物传记资料库 CBDB 247642）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YkgHIHpDR3mT_lZdi_MjcQ
          claim_id: c_qEEpTMUvjH1ZWwxMF3kZ3i
          source_id: s_W9pcbM6x2UJK8KTpukC9t3
          stance: supports
          locator: CBDB:247642
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
        id: c_bd3bBOYtYGLFhn6pjQnN9b
        subject_person_id: p_pkraRhhFphQavzPodgyG7o
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AUAav2wMYc11o1wGoqCa9M
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_prVut3izybG3Hwu9EzCJOX
          claim_id: c_bd3bBOYtYGLFhn6pjQnN9b
          source_id: s_7sKxut838DNA7k1qTDbBK1
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第二甲第五名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7sKxut838DNA7k1qTDbBK1
            source_type: api_record
            title: 中国历代人物传记资料库：王沂（CBDB 126526）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126526&o=json
            external_identifier: CBDB:126526
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.999Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AUAav2wMYc11o1wGoqCa9M
        status: active
        display_name: 王沂
        merged_into_person_id: null
  other: []
---

# 王友諒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王友諒 | accepted |
| bio.summary | 王友諒，明人物。成化十一年進士，曾任府同知。（中国历代人物传记资料库 CBDB 247642） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_AUAav2wMYc11o1wGoqCa9M | 王沂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王沂（CBDB 126526）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126526&o=json)
- [中国历代人物传记资料库：王友諒（CBDB 247642）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247642&o=json)
