---
schema: wang-person/v1
id: p_xRgAFF1QF89F297F8SmuRt
status: active
merged_into: null
display_name: 王穀
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HBLD4GwKgHcFMQPc3HcNMA
        subject_person_id: p_xRgAFF1QF89F297F8SmuRt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王穀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sAZYJBFAuTgzn5HstARAU5
          claim_id: c_HBLD4GwKgHcFMQPc3HcNMA
          source_id: s_Xy364go7u7P8Q4ReVUPkca
          stance: supports
          locator: CBDB:198288
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198288）
          source: &a1
            id: s_Xy364go7u7P8Q4ReVUPkca
            source_type: api_record
            title: 中国历代人物传记资料库：王穀（CBDB 198288）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198288&o=json
            external_identifier: CBDB:198288
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.480Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ws26zMWttsG1iBD5n54KFW
        subject_person_id: p_xRgAFF1QF89F297F8SmuRt
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1421年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4PbczeD9wDL5ARuB7KTAKx
          claim_id: c_ws26zMWttsG1iBD5n54KFW
          source_id: s_Xy364go7u7P8Q4ReVUPkca
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Y7785fXEJs14cyRN1WCYyo
        subject_person_id: p_xRgAFF1QF89F297F8SmuRt
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
        - id: cs_BXXoPoBzHnmPFwGMxbDuB9
          claim_id: c_Y7785fXEJs14cyRN1WCYyo
          source_id: s_Xy364go7u7P8Q4ReVUPkca
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
        id: c_sw1MsqoT6Sd32aAF_z1O3g
        subject_person_id: p_iV3ZGAEu7iRtxc7pxEmjVQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xRgAFF1QF89F297F8SmuRt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ruV-9WH0yVJppzCjBMasRM
          claim_id: c_sw1MsqoT6Sd32aAF_z1O3g
          source_id: s_sAqCF7taW9xBh2FsGdKucb
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第二甲第四十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_sAqCF7taW9xBh2FsGdKucb
            source_type: api_record
            title: 中国历代人物传记资料库：王宴（CBDB 252246）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252246&o=json
            external_identifier: CBDB:252246
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.260Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_iV3ZGAEu7iRtxc7pxEmjVQ
        status: active
        display_name: 王宴
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_TYxRIv6ygU0fvlblcJERH1
        subject_person_id: p_DQEsnKfpdKWL4QhYG8576x
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_xRgAFF1QF89F297F8SmuRt
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o6596ni_V6wgL7vyQhMB0b
          claim_id: c_TYxRIv6ygU0fvlblcJERH1
          source_id: s_3aF69kLsDm8DVDBaVFtUor
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第二甲第四十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3aF69kLsDm8DVDBaVFtUor
            source_type: api_record
            title: 中国历代人物传记资料库：王文信（CBDB 252224）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252224&o=json
            external_identifier: CBDB:252224
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.259Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DQEsnKfpdKWL4QhYG8576x
        status: active
        display_name: 王文信
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王穀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王穀 | accepted |
| birth.date | 1421年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iV3ZGAEu7iRtxc7pxEmjVQ | 王宴 | accepted |
| ancestors | p_DQEsnKfpdKWL4QhYG8576x | 王文信 | accepted |

## 外部来源

- [中国历代人物传记资料库：王穀（CBDB 198288）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198288&o=json)
- [中国历代人物传记资料库：王文信（CBDB 252224）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252224&o=json)
- [中国历代人物传记资料库：王宴（CBDB 252246）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252246&o=json)
