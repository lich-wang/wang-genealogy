---
schema: wang-person/v1
id: p_86NzEXq2mafv9E7Hd1xdpn
status: active
merged_into: null
display_name: 王玕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_P7xw23HkMbdB9KyMupYM1T
        subject_person_id: p_86NzEXq2mafv9E7Hd1xdpn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8vBCye9RGw2ZuEyE19oAfK
          claim_id: c_P7xw23HkMbdB9KyMupYM1T
          source_id: s_VZq9E4EVaw4pMwQ62ABhKP
          stance: supports
          locator: CBDB:284307
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（284307）
          source: &a1
            id: s_VZq9E4EVaw4pMwQ62ABhKP
            source_type: api_record
            title: 中国历代人物传记资料库：王玕（CBDB 284307）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284307&o=json
            external_identifier: CBDB:284307
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.199Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1A43diQ9bGvkx7LE4WK6LY
        subject_person_id: p_86NzEXq2mafv9E7Hd1xdpn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玕，明人物。正德十六年進士，籍贯唐山。（中国历代人物传记资料库 CBDB 284307）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_U3H1GaXwLeShARen_JAu6r
          claim_id: c_1A43diQ9bGvkx7LE4WK6LY
          source_id: s_VZq9E4EVaw4pMwQ62ABhKP
          stance: supports
          locator: CBDB:284307
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

# 王玕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玕 | accepted |
| bio.summary | 王玕，明人物。正德十六年進士，籍贯唐山。（中国历代人物传记资料库 CBDB 284307） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玕（CBDB 284307）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284307&o=json)
