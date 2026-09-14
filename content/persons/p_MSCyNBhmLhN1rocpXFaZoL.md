---
schema: wang-person/v1
id: p_MSCyNBhmLhN1rocpXFaZoL
status: active
merged_into: null
display_name: 王闙
cbdb_id: 323755
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YUjdR5QEPNrADfiZU94y27
        subject_person_id: p_MSCyNBhmLhN1rocpXFaZoL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王闙，明人物。嘉靖三十八年進士，籍贯清苑。（中国历代人物传记资料库 CBDB 323755）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_-_1sNKtpsFZTeaEeyT8HW-
          claim_id: c_YUjdR5QEPNrADfiZU94y27
          source_id: s_c1hLViefFFka6XLsceCaxK
          stance: supports
          locator: CBDB:323755
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_c1hLViefFFka6XLsceCaxK
            source_type: api_record
            title: 中国历代人物传记资料库：王闙（CBDB 323755）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323755&o=json
            external_identifier: CBDB:323755
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_j6Z2dcuyjK6WJx2i9x9FkF
        subject_person_id: p_MSCyNBhmLhN1rocpXFaZoL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王闙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_YsBP7BoN7bSRrExQJpMV1s
          claim_id: c_j6Z2dcuyjK6WJx2i9x9FkF
          source_id: s_c1hLViefFFka6XLsceCaxK
          stance: supports
          locator: CBDB:323755
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Lvw4pPS8Hcy1w0opVqSgyz
        subject_person_id: p_7qYVpNXr3rJeGDwdypL9Mb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MSCyNBhmLhN1rocpXFaZoL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pLHGH4_Kz5vzV1RcF8ba5h
          claim_id: c_Lvw4pPS8Hcy1w0opVqSgyz
          source_id: s_bUKtWhvPFeXinpj1yJ8HbZ
          stance: supports
          locator: CBDB：兄弟 王闐（204766）之父／母 王德純
          quotation: null
          interpretation_note: 由兄弟关系推断：王闙 与 王闐 为同胞（CBDB 记「兄」），王闐 之父／母即 王闙 之父／母。
          source:
            id: s_bUKtWhvPFeXinpj1yJ8HbZ
            source_type: api_record
            title: 中国历代人物传记资料库：王闙（CBDB 323755）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323755&o=json
            external_identifier: CBDB:323755
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
        id: c_bzEK2CyLcRp6JrxiK2w0Xh
        subject_person_id: p_MSCyNBhmLhN1rocpXFaZoL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ck5AXM5Fx2KaAGeW6x29ur
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HXmuXGSP6iUcBK5zWIegCf
          claim_id: c_bzEK2CyLcRp6JrxiK2w0Xh
          source_id: s_bUKtWhvPFeXinpj1yJ8HbZ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204766 王闐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bUKtWhvPFeXinpj1yJ8HbZ
            source_type: api_record
            title: 中国历代人物传记资料库：王闙（CBDB 323755）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323755&o=json
            external_identifier: CBDB:323755
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ck5AXM5Fx2KaAGeW6x29ur
        status: active
        display_name: 王闐
        merged_into_person_id: null
---

# 王闙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王闙，明人物。嘉靖三十八年進士，籍贯清苑。（中国历代人物传记资料库 CBDB 323755） | accepted |
| name.primary | 王闙 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7qYVpNXr3rJeGDwdypL9Mb | 王德純 | accepted |
| other | p_ck5AXM5Fx2KaAGeW6x29ur | 王闐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王闙（CBDB 323755）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323755&o=json)
