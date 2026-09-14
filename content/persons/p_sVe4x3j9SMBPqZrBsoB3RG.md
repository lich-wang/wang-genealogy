---
schema: wang-person/v1
id: p_sVe4x3j9SMBPqZrBsoB3RG
status: active
merged_into: null
display_name: 王哲臣
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_y9CAZaA1CBVsFKD5KBDEua
        subject_person_id: p_sVe4x3j9SMBPqZrBsoB3RG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王哲臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YfdMZ9d9JVe3HbnadYueu1
          claim_id: c_y9CAZaA1CBVsFKD5KBDEua
          source_id: s_w8Ln6YGV1LJJdVMXSLmjE2
          stance: supports
          locator: CBDB:306742
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（306742）
          source: &a1
            id: s_w8Ln6YGV1LJJdVMXSLmjE2
            source_type: api_record
            title: 中国历代人物传记资料库：王哲臣（CBDB 306742）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306742&o=json
            external_identifier: CBDB:306742
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.776Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fFCgUi3AQzx26dihD35jK6
        subject_person_id: p_sVe4x3j9SMBPqZrBsoB3RG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王哲臣，明人物。嘉靖二十三年進士，籍贯泰和。（中国历代人物传记资料库 CBDB 306742）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rhYnKvs-Q7hkmIrypK-m51
          claim_id: c_fFCgUi3AQzx26dihD35jK6
          source_id: s_w8Ln6YGV1LJJdVMXSLmjE2
          stance: supports
          locator: CBDB:306742
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_R8MTZDH1R9jAIfKJYi3v2g
        subject_person_id: p_Y4FNMr5v5UBkNhYB7rhbfs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sVe4x3j9SMBPqZrBsoB3RG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oKiH1S7GGhND4YXDKZH-RP
          claim_id: c_R8MTZDH1R9jAIfKJYi3v2g
          source_id: s_wcOawq7OMV0PlqLnfN5uig
          stance: supports
          locator: CBDB：兄弟 王鳴臣（126785）之父／母 王國賜
          quotation: null
          interpretation_note: 由兄弟关系推断：王哲臣 与 王鳴臣 为同胞（CBDB 记「兄」），王鳴臣 之父／母即 王哲臣 之父／母。
          source:
            id: s_wcOawq7OMV0PlqLnfN5uig
            source_type: api_record
            title: 中国历代人物传记资料库：王哲臣（CBDB 306742）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306742&o=json
            external_identifier: CBDB:306742
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Y4FNMr5v5UBkNhYB7rhbfs
        status: active
        display_name: 王國賜
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_R4tNZa9dp4HoTG3GrTbz41
        subject_person_id: p_gYn21nxF9d7iJNFwbu2Rnf
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sVe4x3j9SMBPqZrBsoB3RG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bXZzbvQo0eJwTWATm4zC5o
          claim_id: c_R4tNZa9dp4HoTG3GrTbz41
          source_id: s_wcOawq7OMV0PlqLnfN5uig
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126785 王鳴臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_wcOawq7OMV0PlqLnfN5uig
            source_type: api_record
            title: 中国历代人物传记资料库：王哲臣（CBDB 306742）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306742&o=json
            external_identifier: CBDB:306742
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gYn21nxF9d7iJNFwbu2Rnf
        status: active
        display_name: 王鳴臣
        merged_into_person_id: null
---

# 王哲臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王哲臣 | accepted |
| bio.summary | 王哲臣，明人物。嘉靖二十三年進士，籍贯泰和。（中国历代人物传记资料库 CBDB 306742） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Y4FNMr5v5UBkNhYB7rhbfs | 王國賜 | accepted |
| other | p_gYn21nxF9d7iJNFwbu2Rnf | 王鳴臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王哲臣（CBDB 306742）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306742&o=json)
