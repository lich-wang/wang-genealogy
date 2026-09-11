---
schema: wang-person/v1
id: p_XKApWYJnmMgLZmZqtzznxJ
status: active
merged_into: null
display_name: 王教
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_61JRqNBrcfDprrUgipb9FT
        subject_person_id: p_XKApWYJnmMgLZmZqtzznxJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王教
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JQrGjrADtenWsPUUdughdu
          claim_id: c_61JRqNBrcfDprrUgipb9FT
          source_id: s_MTUp1y79DnineKtCayJ3JJ
          stance: supports
          locator: CBDB:126674
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126674）
          source: &a1
            id: s_MTUp1y79DnineKtCayJ3JJ
            source_type: api_record
            title: 中国历代人物传记资料库：王教（CBDB 126674）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126674&o=json
            external_identifier: CBDB:126674
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.110Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7zSk8eCYyanLbyg9STJJio
        subject_person_id: p_XKApWYJnmMgLZmZqtzznxJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NFYNtMzsrrphRD9KcrUy3o
          claim_id: c_7zSk8eCYyanLbyg9STJJio
          source_id: s_MTUp1y79DnineKtCayJ3JJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_WF-L5OkkPeIdhqHlvytwMs
        subject_person_id: p_qf3o1GvREG3ttJivbyaJJw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XKApWYJnmMgLZmZqtzznxJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dyVpizJRH7MwBCHBdrekc1
          claim_id: c_WF-L5OkkPeIdhqHlvytwMs
          source_id: s_UXtCrGLt3TnSHxKrDXsH4n
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第四十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UXtCrGLt3TnSHxKrDXsH4n
            source_type: api_record
            title: 中国历代人物传记资料库：王山（CBDB 292308）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292308&o=json
            external_identifier: CBDB:292308
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.403Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_qf3o1GvREG3ttJivbyaJJw
        status: active
        display_name: 王山
        merged_into_person_id: null
  children:
    - claim:
        id: c_EjcUCOnzwJBxTpOz8cLiLW
        subject_person_id: p_XKApWYJnmMgLZmZqtzznxJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_c4pHW4ZDyaMb9z5Mt8e6Lf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MUb-xYd3m7zygbncDR3VjO
          claim_id: c_EjcUCOnzwJBxTpOz8cLiLW
          source_id: s_eRXRXBHB9N7MkN9LaQVr9z
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第四十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_eRXRXBHB9N7MkN9LaQVr9z
            source_type: api_record
            title: 中国历代人物传记资料库：王子厚（CBDB 292315）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292315&o=json
            external_identifier: CBDB:292315
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_c4pHW4ZDyaMb9z5Mt8e6Lf
        status: active
        display_name: 王子厚
        merged_into_person_id: null
    - claim:
        id: c_pVVYU5DnRYRt9JmHSh88oE
        subject_person_id: p_XKApWYJnmMgLZmZqtzznxJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FppM3Psb49wdjiEDLgj4ih
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OgeD531PlbTFVFaVG8j-OF
          claim_id: c_pVVYU5DnRYRt9JmHSh88oE
          source_id: s_kHmywbA8UQqpSaMFEB4x9N
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第四十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_kHmywbA8UQqpSaMFEB4x9N
            source_type: api_record
            title: 中国历代人物传记资料库：王子學（CBDB 292313）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292313&o=json
            external_identifier: CBDB:292313
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_FppM3Psb49wdjiEDLgj4ih
        status: active
        display_name: 王子學
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Z9XkjieWX6yHuBfavCFyL2
        subject_person_id: p_b882QVXceoZok18SQAv5Rc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_XKApWYJnmMgLZmZqtzznxJ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J7T77ujJ4dg0MXgLmm_XsK
          claim_id: c_Z9XkjieWX6yHuBfavCFyL2
          source_id: s_SaKi6ZJP5976BcmvEXxKfr
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第四十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_SaKi6ZJP5976BcmvEXxKfr
            source_type: api_record
            title: 中国历代人物传记资料库：王璿（CBDB 292305）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292305&o=json
            external_identifier: CBDB:292305
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.400Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_b882QVXceoZok18SQAv5Rc
        status: active
        display_name: 王璿
        merged_into_person_id: null
    - claim:
        id: c_62JMEmMZz8ks6veCx9VcE0
        subject_person_id: p_BxC4uACvR2xMAKZRYpDAhv
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_XKApWYJnmMgLZmZqtzznxJ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3mQ1HgNsHjLy4eqYSHR1uT
          claim_id: c_62JMEmMZz8ks6veCx9VcE0
          source_id: s_tktoThxfWQ7JAns87E8uJs
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第四十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tktoThxfWQ7JAns87E8uJs
            source_type: api_record
            title: 中国历代人物传记资料库：王宗（CBDB 292307）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292307&o=json
            external_identifier: CBDB:292307
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.402Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BxC4uACvR2xMAKZRYpDAhv
        status: active
        display_name: 王宗
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王教

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王教 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qf3o1GvREG3ttJivbyaJJw | 王山 | accepted |
| children | p_c4pHW4ZDyaMb9z5Mt8e6Lf | 王子厚 | accepted |
| children | p_FppM3Psb49wdjiEDLgj4ih | 王子學 | accepted |
| ancestors | p_b882QVXceoZok18SQAv5Rc | 王璿 | accepted |
| ancestors | p_BxC4uACvR2xMAKZRYpDAhv | 王宗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王教（CBDB 126674）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126674&o=json)
- [中国历代人物传记资料库：王山（CBDB 292308）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292308&o=json)
- [中国历代人物传记资料库：王璿（CBDB 292305）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292305&o=json)
- [中国历代人物传记资料库：王子厚（CBDB 292315）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292315&o=json)
- [中国历代人物传记资料库：王子學（CBDB 292313）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292313&o=json)
- [中国历代人物传记资料库：王宗（CBDB 292307）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292307&o=json)
