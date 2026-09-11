---
schema: wang-person/v1
id: p_g7xZW15V6AiJ8A2RX9MQ3F
status: active
merged_into: null
display_name: 王益謙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RPUBDMM7wZGvxeL2BoG28X
        subject_person_id: p_g7xZW15V6AiJ8A2RX9MQ3F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王益謙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_E5DZjmzr9uVsK3Ga913m8u
          claim_id: c_RPUBDMM7wZGvxeL2BoG28X
          source_id: s_83zFbBEWYPwt8swaNZK3Po
          stance: supports
          locator: CBDB:71967
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71967）
          source: &a1
            id: s_83zFbBEWYPwt8swaNZK3Po
            source_type: api_record
            title: 中国历代人物传记资料库：王益謙（CBDB 71967）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71967&o=json
            external_identifier: CBDB:71967
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.941Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_iN4PkMdbQPXACjPrbB1VxR
        subject_person_id: p_g7xZW15V6AiJ8A2RX9MQ3F
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1783年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_39JP9rV31ho55u6KtD5G2M
          claim_id: c_iN4PkMdbQPXACjPrbB1VxR
          source_id: s_83zFbBEWYPwt8swaNZK3Po
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
        id: c_skZK8rL5sxGi4deUHikFYy
        subject_person_id: p_g7xZW15V6AiJ8A2RX9MQ3F
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1857年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kL42eubqXqQG7511dcXsNv
          claim_id: c_skZK8rL5sxGi4deUHikFYy
          source_id: s_83zFbBEWYPwt8swaNZK3Po
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
        id: c_h6r14APwcN9AynkRZNbDNK
        subject_person_id: p_g7xZW15V6AiJ8A2RX9MQ3F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王益謙（1783年—1857年），清人物。籍贯蒲城。（中国历代人物传记资料库 CBDB 71967）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hprnkGZ2s1iE5xq0U_tw3n
          claim_id: c_h6r14APwcN9AynkRZNbDNK
          source_id: s_83zFbBEWYPwt8swaNZK3Po
          stance: supports
          locator: CBDB:71967
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

# 王益謙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王益謙 | accepted |
| birth.date | 1783年 | accepted |
| death.date | 1857年 | accepted |
| bio.summary | 王益謙（1783年—1857年），清人物。籍贯蒲城。（中国历代人物传记资料库 CBDB 71967） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王益謙（CBDB 71967）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71967&o=json)
