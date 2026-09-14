---
schema: wang-person/v1
id: p_dwGp6jGuD9i2ghEHfvT8CV
status: active
merged_into: null
display_name: 王闕
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_p86wWbJiSPGVMh4KMbPFhc
        subject_person_id: p_dwGp6jGuD9i2ghEHfvT8CV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王闕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qCVW9LsPNUhpwdhvQVittQ
          claim_id: c_p86wWbJiSPGVMh4KMbPFhc
          source_id: s_971T4M1tZbuJLuK5rQxe9B
          stance: supports
          locator: CBDB:323757
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（323757）
          source: &a1
            id: s_971T4M1tZbuJLuK5rQxe9B
            source_type: api_record
            title: 中国历代人物传记资料库：王闕（CBDB 323757）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323757&o=json
            external_identifier: CBDB:323757
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.151Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B21PcQX23jKA8sYomJZ8tA
        subject_person_id: p_dwGp6jGuD9i2ghEHfvT8CV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王闕，明人物。嘉靖三十八年進士，籍贯清苑。（中国历代人物传记资料库 CBDB 323757）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Q6YlbKqUrzGA-t2YBLe__3
          claim_id: c_B21PcQX23jKA8sYomJZ8tA
          source_id: s_971T4M1tZbuJLuK5rQxe9B
          stance: supports
          locator: CBDB:323757
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Ikft9yoen11Sc4HxXB_Kea
        subject_person_id: p_7qYVpNXr3rJeGDwdypL9Mb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dwGp6jGuD9i2ghEHfvT8CV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AvnWV7trlN3-66kvuc4hB6
          claim_id: c_Ikft9yoen11Sc4HxXB_Kea
          source_id: s_YoObEK8IlHTz34Ux2gjoZT
          stance: supports
          locator: CBDB：兄弟 王闐（204766）之父／母 王德純
          quotation: null
          interpretation_note: 由兄弟关系推断：王闕 与 王闐 为同胞（CBDB 记「兄」），王闐 之父／母即 王闕 之父／母。
          source:
            id: s_YoObEK8IlHTz34Ux2gjoZT
            source_type: api_record
            title: 中国历代人物传记资料库：王闕（CBDB 323757）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323757&o=json
            external_identifier: CBDB:323757
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7qYVpNXr3rJeGDwdypL9Mb
        status: active
        display_name: 王德純
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_m6itfg1dWuh25P_k_08IIU
        subject_person_id: p_ck5AXM5Fx2KaAGeW6x29ur
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dwGp6jGuD9i2ghEHfvT8CV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ufvz3RwcXPlVS_7QfKJPJu
          claim_id: c_m6itfg1dWuh25P_k_08IIU
          source_id: s_YoObEK8IlHTz34Ux2gjoZT
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204766 王闐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_YoObEK8IlHTz34Ux2gjoZT
            source_type: api_record
            title: 中国历代人物传记资料库：王闕（CBDB 323757）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323757&o=json
            external_identifier: CBDB:323757
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ck5AXM5Fx2KaAGeW6x29ur
        status: active
        display_name: 王闐
        merged_into_person_id: null
---

# 王闕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王闕 | accepted |
| bio.summary | 王闕，明人物。嘉靖三十八年進士，籍贯清苑。（中国历代人物传记资料库 CBDB 323757） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7qYVpNXr3rJeGDwdypL9Mb | 王德純 | accepted |
| other | p_ck5AXM5Fx2KaAGeW6x29ur | 王闐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王闕（CBDB 323757）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323757&o=json)
