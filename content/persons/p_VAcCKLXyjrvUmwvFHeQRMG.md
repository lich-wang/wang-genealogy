---
schema: wang-person/v1
id: p_VAcCKLXyjrvUmwvFHeQRMG
status: active
merged_into: null
display_name: 王之孚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_j812F3P6CHYZTnyV8XAQLG
        subject_person_id: p_VAcCKLXyjrvUmwvFHeQRMG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之孚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_945uWQZzEvjqqCdABGdT4m
          claim_id: c_j812F3P6CHYZTnyV8XAQLG
          source_id: s_VyVfMLfJX2y2sAAVFXhPR6
          stance: supports
          locator: CBDB:71352
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71352）
          source: &a1
            id: s_VyVfMLfJX2y2sAAVFXhPR6
            source_type: api_record
            title: 中国历代人物传记资料库：王之孚（CBDB 71352）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71352&o=json
            external_identifier: CBDB:71352
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.611Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_qvJrH7gXwnnjifuUdsVJ9J
        subject_person_id: p_VAcCKLXyjrvUmwvFHeQRMG
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1786年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LnYipNik1wjDHUiFiCoPg8
          claim_id: c_qvJrH7gXwnnjifuUdsVJ9J
          source_id: s_VyVfMLfJX2y2sAAVFXhPR6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_mAx1KvZYWU15nuQUWEU7Et
        subject_person_id: p_VAcCKLXyjrvUmwvFHeQRMG
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1812年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QERgoPKKc7PdNvhao4JMuo
          claim_id: c_mAx1KvZYWU15nuQUWEU7Et
          source_id: s_VyVfMLfJX2y2sAAVFXhPR6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_P9GNDcaiovqg9mszXj58pc
        subject_person_id: p_VAcCKLXyjrvUmwvFHeQRMG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之孚（1786年—1812年），清人物。籍贯震澤。（中国历代人物传记资料库 CBDB 71352）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_D_CrRbwL_uEfTWGvilOW4u
          claim_id: c_P9GNDcaiovqg9mszXj58pc
          source_id: s_VyVfMLfJX2y2sAAVFXhPR6
          stance: supports
          locator: CBDB:71352
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
  descendants: []
  other: []
---

# 王之孚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之孚 | accepted |
| birth.date | 1786年 | accepted |
| death.date | 1812年 | accepted |
| bio.summary | 王之孚（1786年—1812年），清人物。籍贯震澤。（中国历代人物传记资料库 CBDB 71352） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之孚（CBDB 71352）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71352&o=json)
