---
schema: wang-person/v1
id: p_9sQEBfsa6iJuc5vUdGFPe1
status: active
merged_into: null
display_name: 王鉅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2yxZqkLQ35vWzMpGgGfQZt
        subject_person_id: p_9sQEBfsa6iJuc5vUdGFPe1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_t1eFYMtpQiyGVA2tM2JeHm
          claim_id: c_2yxZqkLQ35vWzMpGgGfQZt
          source_id: s_qdgF3TutAcQKag7cN8DHqc
          stance: supports
          locator: CBDB:71132
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71132）
          source: &a1
            id: s_qdgF3TutAcQKag7cN8DHqc
            source_type: api_record
            title: 中国历代人物传记资料库：王鉅（CBDB 71132）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71132&o=json
            external_identifier: CBDB:71132
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.407Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_JgmNBV4aN4BeAh6E9Yi1m7
        subject_person_id: p_9sQEBfsa6iJuc5vUdGFPe1
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1690年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mFoWr7ST56zTyp4WJCNfRG
          claim_id: c_JgmNBV4aN4BeAh6E9Yi1m7
          source_id: s_qdgF3TutAcQKag7cN8DHqc
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
        id: c_Wt1NbbEV6w2ZHJxU9S2g5d
        subject_person_id: p_9sQEBfsa6iJuc5vUdGFPe1
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1771年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R1tfBnWWtv3QMrv8j4bU5k
          claim_id: c_Wt1NbbEV6w2ZHJxU9S2g5d
          source_id: s_qdgF3TutAcQKag7cN8DHqc
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
        id: c_BxCRCW1ts8VQRfcmAwaehe
        subject_person_id: p_9sQEBfsa6iJuc5vUdGFPe1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉅（1690年—1771年），清人物。籍贯鹽城。（中国历代人物传记资料库 CBDB 71132）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oevtxpAtpkeVsgWIfsagTU
          claim_id: c_BxCRCW1ts8VQRfcmAwaehe
          source_id: s_qdgF3TutAcQKag7cN8DHqc
          stance: supports
          locator: CBDB:71132
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

# 王鉅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鉅 | accepted |
| birth.date | 1690年 | accepted |
| death.date | 1771年 | accepted |
| bio.summary | 王鉅（1690年—1771年），清人物。籍贯鹽城。（中国历代人物传记资料库 CBDB 71132） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鉅（CBDB 71132）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71132&o=json)
