---
schema: wang-person/v1
id: p_fXrAzDcQUb9KZoaoztu9Rn
status: active
merged_into: null
display_name: 王世昌
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d6qCwF45MKt6wvdKMrGxA8
        subject_person_id: p_fXrAzDcQUb9KZoaoztu9Rn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3RwmsGD1D6qXG7kjTPKWr7
          claim_id: c_d6qCwF45MKt6wvdKMrGxA8
          source_id: s_7K5uyMJ7d8zbD4hCw6KWWE
          stance: supports
          locator: CBDB:27011
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（27011）
          source: &a1
            id: s_7K5uyMJ7d8zbD4hCw6KWWE
            source_type: api_record
            title: 中国历代人物传记资料库：王世昌（CBDB 27011）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27011&o=json
            external_identifier: CBDB:27011
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.951Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Zv4uLxKK6182DSzsb8nEPn
        subject_person_id: p_fXrAzDcQUb9KZoaoztu9Rn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世昌，宋人物。籍贯蓬萊。（中国历代人物传记资料库 CBDB 27011）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Kt8FpB9x4LA3qme9Jh4cN9
          claim_id: c_Zv4uLxKK6182DSzsb8nEPn
          source_id: s_7K5uyMJ7d8zbD4hCw6KWWE
          stance: supports
          locator: CBDB:27011
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_OIVMkFwB1T97LKDJZfHEso
        subject_person_id: p_fXrAzDcQUb9KZoaoztu9Rn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3Myb97D1SiKjhymH1XsKkM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_m69OLeerxnnWdoIduIGHR1
          claim_id: c_OIVMkFwB1T97LKDJZfHEso
          source_id: s_Uf0mM4g5VN0wWajD7cFpcU
          stance: supports
          locator: CBDB 亲属：父（KinPerson 27011）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_Uf0mM4g5VN0wWajD7cFpcU
            source_type: api_record
            title: 中国历代人物传记资料库：王子琦（CBDB 27012）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27012&o=json
            external_identifier: CBDB:27012
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3Myb97D1SiKjhymH1XsKkM
        status: active
        display_name: 王子琦
        merged_into_person_id: null
    - claim:
        id: c_rRSHz_TpUXicmuwFYhU2ZH
        subject_person_id: p_fXrAzDcQUb9KZoaoztu9Rn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gtmtpy5hiB7XQCfMFZ6qcX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Kyn-cnLsLEbVm1MrF6_79W
          claim_id: c_rRSHz_TpUXicmuwFYhU2ZH
          source_id: s_iSadKlHuAohxEGBKqxuluK
          stance: supports
          locator: CBDB 亲属：父（KinPerson 27011）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_iSadKlHuAohxEGBKqxuluK
            source_type: api_record
            title: 中国历代人物传记资料库：王子京（CBDB 1909）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1909&o=json
            external_identifier: CBDB:1909
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gtmtpy5hiB7XQCfMFZ6qcX
        status: active
        display_name: 王子京
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王世昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世昌 | accepted |
| bio.summary | 王世昌，宋人物。籍贯蓬萊。（中国历代人物传记资料库 CBDB 27011） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_3Myb97D1SiKjhymH1XsKkM | 王子琦 | accepted |
| children | p_gtmtpy5hiB7XQCfMFZ6qcX | 王子京 | accepted |

## 外部来源

- [中国历代人物传记资料库：王世昌（CBDB 27011）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27011&o=json)
- [中国历代人物传记资料库：王子京（CBDB 1909）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1909&o=json)
- [中国历代人物传记资料库：王子琦（CBDB 27012）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27012&o=json)
