---
schema: wang-person/v1
id: p_DjjvyNFfAS41RfzRz1yEYu
status: active
merged_into: null
display_name: 王日藻
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qeMT31nRCyS6442EH8XvMF
        subject_person_id: p_DjjvyNFfAS41RfzRz1yEYu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王日藻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2TPjVYRPWjUiL2ecG1PP62
          claim_id: c_qeMT31nRCyS6442EH8XvMF
          source_id: s_KLGz9BR8HFF4EZVMaXTUXQ
          stance: supports
          locator: CBDB:59944
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（59944）
          source: &a1
            id: s_KLGz9BR8HFF4EZVMaXTUXQ
            source_type: api_record
            title: 中国历代人物传记资料库：王日藻（CBDB 59944）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=59944&o=json
            external_identifier: CBDB:59944
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.839Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_3auvSn55mdqJWHYYMJu9mL
        subject_person_id: p_DjjvyNFfAS41RfzRz1yEYu
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1623年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nUwhbQtpjSQQEFHbWd58PL
          claim_id: c_3auvSn55mdqJWHYYMJu9mL
          source_id: s_KLGz9BR8HFF4EZVMaXTUXQ
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
        id: c_4bfdSkF8A8j6SW12H9eLH3
        subject_person_id: p_DjjvyNFfAS41RfzRz1yEYu
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1700年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8TFzxg74898VVmV7NWxD9K
          claim_id: c_4bfdSkF8A8j6SW12H9eLH3
          source_id: s_KLGz9BR8HFF4EZVMaXTUXQ
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
        id: c_VN9bXZusTnUrZ3AWptB3bW
        subject_person_id: p_DjjvyNFfAS41RfzRz1yEYu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王日藻（1623年—1700年），清人物。明清進士進士，籍贯華亭，入仕進士，曾任按察使、參議、副都御史。（中国历代人物传记资料库 CBDB 59944）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_s-MA4LaDcnt9W46r2DFm1W
          claim_id: c_VN9bXZusTnUrZ3AWptB3bW
          source_id: s_KLGz9BR8HFF4EZVMaXTUXQ
          stance: supports
          locator: CBDB:59944
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
  ancestors:
    - claim:
        id: c_uir1DlBTBrwjn6L4UC72tm
        subject_person_id: p_nMSUAzmjPJ3W1rJhj7JaCe
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DjjvyNFfAS41RfzRz1yEYu
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GYJlwhTY_e3yYOV4Hnak00
          claim_id: c_uir1DlBTBrwjn6L4UC72tm
          source_id: s_KLGz9BR8HFF4EZVMaXTUXQ
          stance: supports
          locator: 江南通志，lgid=65760：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_nMSUAzmjPJ3W1rJhj7JaCe
        status: active
        display_name: 王陞
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王日藻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王日藻 | accepted |
| birth.date | 1623年 | accepted |
| death.date | 1700年 | accepted |
| bio.summary | 王日藻（1623年—1700年），清人物。明清進士進士，籍贯華亭，入仕進士，曾任按察使、參議、副都御史。（中国历代人物传记资料库 CBDB 59944） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_nMSUAzmjPJ3W1rJhj7JaCe | 王陞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王日藻（CBDB 59944）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=59944&o=json)
