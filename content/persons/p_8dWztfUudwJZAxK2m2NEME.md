---
schema: wang-person/v1
id: p_8dWztfUudwJZAxK2m2NEME
status: active
merged_into: null
display_name: 王遘
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_foTEeKewYLhyu9LjYifuPd
        subject_person_id: p_8dWztfUudwJZAxK2m2NEME
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RCk1BsxQQjT1YGMuTJakJ5
          claim_id: c_foTEeKewYLhyu9LjYifuPd
          source_id: s_Tg6VfPnXd1VN4SVyQbkpjn
          stance: supports
          locator: CBDB:157635
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（157635）
          source: &a1
            id: s_Tg6VfPnXd1VN4SVyQbkpjn
            source_type: api_record
            title: 中国历代人物传记资料库：王遘（CBDB 157635）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157635&o=json
            external_identifier: CBDB:157635
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.910Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LYsziG7peCVfsPAw81mfRN
        subject_person_id: p_8dWztfUudwJZAxK2m2NEME
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遘，唐人物。籍贯長安，曾任金部郎中、州刺史。（中国历代人物传记资料库 CBDB 157635）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_f6sLB5VJlfZrD9lTdR345P
          claim_id: c_LYsziG7peCVfsPAw81mfRN
          source_id: s_Tg6VfPnXd1VN4SVyQbkpjn
          stance: supports
          locator: CBDB:157635
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_JrBPVEO849w6zSSX_qJrOp
        subject_person_id: p_X6jrCw6Y7DQpEkbz1DuCWH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8dWztfUudwJZAxK2m2NEME
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Oj4tthTlDn1mIQxyVyRsVF
          claim_id: c_JrBPVEO849w6zSSX_qJrOp
          source_id: s_21pL2VwsaWo8U6ejWRHnnV
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_21pL2VwsaWo8U6ejWRHnnV
            source_type: api_record
            title: 中国历代人物传记资料库：王燾（CBDB 33017）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33017&o=json
            external_identifier: CBDB:33017
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.064Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_X6jrCw6Y7DQpEkbz1DuCWH
        status: active
        display_name: 王燾
        merged_into_person_id: null
  children:
    - claim:
        id: c_jfnTMBI2SKSpTHtjyk4RQu
        subject_person_id: p_8dWztfUudwJZAxK2m2NEME
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kW6BHpFnPbBsA8JbJBRAGy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zjdnvISioUsWy5c7HXPEQn
          claim_id: c_jfnTMBI2SKSpTHtjyk4RQu
          source_id: s_Tg6VfPnXd1VN4SVyQbkpjn
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dahe 15：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kW6BHpFnPbBsA8JbJBRAGy
        status: active
        display_name: 王師正
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王遘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遘 | accepted |
| bio.summary | 王遘，唐人物。籍贯長安，曾任金部郎中、州刺史。（中国历代人物传记资料库 CBDB 157635） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_X6jrCw6Y7DQpEkbz1DuCWH | 王燾 | accepted |
| children | p_kW6BHpFnPbBsA8JbJBRAGy | 王師正 | accepted |

## 外部来源

- [中国历代人物传记资料库：王燾（CBDB 33017）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33017&o=json)
- [中国历代人物传记资料库：王遘（CBDB 157635）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157635&o=json)
