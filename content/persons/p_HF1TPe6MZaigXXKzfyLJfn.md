---
schema: wang-person/v1
id: p_HF1TPe6MZaigXXKzfyLJfn
status: active
merged_into: null
display_name: 王永平
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UBiuUsrUAg8gywNMCpLR1e
        subject_person_id: p_HF1TPe6MZaigXXKzfyLJfn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永平
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1yVPnpMVPd8oBxdEoDGFUP
          claim_id: c_UBiuUsrUAg8gywNMCpLR1e
          source_id: s_EEdpPd8519Awtga1CuW12p
          stance: supports
          locator: CBDB:638977
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638977）
          source: &a1
            id: s_EEdpPd8519Awtga1CuW12p
            source_type: api_record
            title: 中国历代人物传记资料库：王永平（CBDB 638977）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638977&o=json
            external_identifier: CBDB:638977
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.803Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_acSAS3pu7UY9PD7TQpPABQ
        subject_person_id: p_HF1TPe6MZaigXXKzfyLJfn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永平，清人物。籍贯歷城，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 638977）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gp16LTyNo4hHgBueiNJ1Y0
          claim_id: c_acSAS3pu7UY9PD7TQpPABQ
          source_id: s_EEdpPd8519Awtga1CuW12p
          stance: supports
          locator: CBDB:638977
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

# 王永平

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永平 | accepted |
| bio.summary | 王永平，清人物。籍贯歷城，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 638977） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王永平（CBDB 638977）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638977&o=json)
