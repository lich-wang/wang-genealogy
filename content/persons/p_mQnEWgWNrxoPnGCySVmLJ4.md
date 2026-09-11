---
schema: wang-person/v1
id: p_mQnEWgWNrxoPnGCySVmLJ4
status: active
merged_into: null
display_name: 王禮和
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_189nkVLixB8K3Aex2HrYTv
        subject_person_id: p_mQnEWgWNrxoPnGCySVmLJ4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禮和
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_13bL5bJZB6PJyngtigKUEc
          claim_id: c_189nkVLixB8K3Aex2HrYTv
          source_id: s_m6NTTdbNAyn8zWpG3qpd6s
          stance: supports
          locator: CBDB:231052
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（231052）
          source: &a1
            id: s_m6NTTdbNAyn8zWpG3qpd6s
            source_type: api_record
            title: 中国历代人物传记资料库：王禮和（CBDB 231052）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231052&o=json
            external_identifier: CBDB:231052
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.633Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SxopnV62ziK74kh87bSQuw
        subject_person_id: p_mQnEWgWNrxoPnGCySVmLJ4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禮和，明人物。宣德八年進士。（中国历代人物传记资料库 CBDB 231052）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QwoH8F5cEeAeKK1RFCbak4
          claim_id: c_SxopnV62ziK74kh87bSQuw
          source_id: s_m6NTTdbNAyn8zWpG3qpd6s
          stance: supports
          locator: CBDB:231052
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
        id: c_Yg8PLPsq6T2n_6D8wU7oW5
        subject_person_id: p_mQnEWgWNrxoPnGCySVmLJ4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7j83XKHhJr8JnHARH8PeYg
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EyywWKHPxx7jJKfwyXfRh4
          claim_id: c_Yg8PLPsq6T2n_6D8wU7oW5
          source_id: s_uzW9Ddf4Rc2dppD7goBC2K
          stance: supports
          locator: 宣德八年進士登科錄:一卷，第二甲第十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_uzW9Ddf4Rc2dppD7goBC2K
            source_type: api_record
            title: 中国历代人物传记资料库：王弼（CBDB 207304）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207304&o=json
            external_identifier: CBDB:207304
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.916Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7j83XKHhJr8JnHARH8PeYg
        status: active
        display_name: 王弼
        merged_into_person_id: null
  other: []
---

# 王禮和

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王禮和 | accepted |
| bio.summary | 王禮和，明人物。宣德八年進士。（中国历代人物传记资料库 CBDB 231052） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_7j83XKHhJr8JnHARH8PeYg | 王弼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弼（CBDB 207304）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207304&o=json)
- [中国历代人物传记资料库：王禮和（CBDB 231052）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231052&o=json)
