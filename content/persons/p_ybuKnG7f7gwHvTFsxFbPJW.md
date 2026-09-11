---
schema: wang-person/v1
id: p_ybuKnG7f7gwHvTFsxFbPJW
status: active
merged_into: null
display_name: 王斗機
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oUidk5Ts7W8QbMu77MZq2P
        subject_person_id: p_ybuKnG7f7gwHvTFsxFbPJW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王斗機
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5L5ShP4fqPEHYjY134t7HW
          claim_id: c_oUidk5Ts7W8QbMu77MZq2P
          source_id: s_VaGArua334UUUJ6pD2tAq8
          stance: supports
          locator: CBDB:71437
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71437）
          source: &a1
            id: s_VaGArua334UUUJ6pD2tAq8
            source_type: api_record
            title: 中国历代人物传记资料库：王斗機（CBDB 71437）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71437&o=json
            external_identifier: CBDB:71437
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.669Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_KBPiJGRjT2ZMGLcGAuL9Vy
        subject_person_id: p_ybuKnG7f7gwHvTFsxFbPJW
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1638年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BR1y9Px7BKabnQN8M69joE
          claim_id: c_KBPiJGRjT2ZMGLcGAuL9Vy
          source_id: s_VaGArua334UUUJ6pD2tAq8
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
        id: c_dzHCFMbsDJTSuezc34Ldap
        subject_person_id: p_ybuKnG7f7gwHvTFsxFbPJW
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1711年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9KMmJGsatWNScY41PinXFq
          claim_id: c_dzHCFMbsDJTSuezc34Ldap
          source_id: s_VaGArua334UUUJ6pD2tAq8
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
        id: c_pGqgKi5BECF61gpmwVAsJy
        subject_person_id: p_ybuKnG7f7gwHvTFsxFbPJW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王斗機（1638年—1711年），清人物。籍贯華陰。（中国历代人物传记资料库 CBDB 71437）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9rq5KgTt7DL3dCu32sIvAa
          claim_id: c_pGqgKi5BECF61gpmwVAsJy
          source_id: s_VaGArua334UUUJ6pD2tAq8
          stance: supports
          locator: CBDB:71437
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

# 王斗機

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王斗機 | accepted |
| birth.date | 1638年 | accepted |
| death.date | 1711年 | accepted |
| bio.summary | 王斗機（1638年—1711年），清人物。籍贯華陰。（中国历代人物传记资料库 CBDB 71437） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王斗機（CBDB 71437）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71437&o=json)
