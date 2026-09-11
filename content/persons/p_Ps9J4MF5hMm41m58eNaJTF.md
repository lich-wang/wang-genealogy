---
schema: wang-person/v1
id: p_Ps9J4MF5hMm41m58eNaJTF
status: active
merged_into: null
display_name: 王書城
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E1isNSEKDS3brnKdGuWnWS
        subject_person_id: p_Ps9J4MF5hMm41m58eNaJTF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王書城
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CuTxFfAEj6RwWHMCe31VLL
          claim_id: c_E1isNSEKDS3brnKdGuWnWS
          source_id: s_G14wP3kpBdAMcoN5J2Cs6m
          stance: supports
          locator: CBDB:638537
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638537）
          source: &a1
            id: s_G14wP3kpBdAMcoN5J2Cs6m
            source_type: api_record
            title: 中国历代人物传记资料库：王書城（CBDB 638537）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638537&o=json
            external_identifier: CBDB:638537
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.665Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ayitv81Fi7NPAoXf1bPXEm
        subject_person_id: p_Ps9J4MF5hMm41m58eNaJTF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王書城，清人物。籍贯衡山，入仕附貢生，曾任知縣。（中国历代人物传记资料库 CBDB 638537）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7wPxegpacx5FKTN2G9p4fZ
          claim_id: c_Ayitv81Fi7NPAoXf1bPXEm
          source_id: s_G14wP3kpBdAMcoN5J2Cs6m
          stance: supports
          locator: CBDB:638537
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

# 王書城

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王書城 | accepted |
| bio.summary | 王書城，清人物。籍贯衡山，入仕附貢生，曾任知縣。（中国历代人物传记资料库 CBDB 638537） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王書城（CBDB 638537）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638537&o=json)
