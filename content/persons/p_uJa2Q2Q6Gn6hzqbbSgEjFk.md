---
schema: wang-person/v1
id: p_uJa2Q2Q6Gn6hzqbbSgEjFk
status: active
merged_into: null
display_name: 王光昇
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NFEYEBiVa4a4EBrqXYzcKn
        subject_person_id: p_uJa2Q2Q6Gn6hzqbbSgEjFk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光昇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vkhUJRNyd4nAjDBaGDRDFE
          claim_id: c_NFEYEBiVa4a4EBrqXYzcKn
          source_id: s_eZLm2GpVp2dGuW6q3n4HwV
          stance: supports
          locator: CBDB:69207
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69207）
          source: &a1
            id: s_eZLm2GpVp2dGuW6q3n4HwV
            source_type: api_record
            title: 中国历代人物传记资料库：王光昇（CBDB 69207）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69207&o=json
            external_identifier: CBDB:69207
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.153Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AQEgpjhoH6JrSG8Bg14711
        subject_person_id: p_uJa2Q2Q6Gn6hzqbbSgEjFk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光昇，清人物。籍贯廬陵，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 69207）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SV6BLYHobzLjkzzIudnpmO
          claim_id: c_AQEgpjhoH6JrSG8Bg14711
          source_id: s_eZLm2GpVp2dGuW6q3n4HwV
          stance: supports
          locator: CBDB:69207
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_bYJo7j3-rpQKDsNtASEKfF
        subject_person_id: p_uJa2Q2Q6Gn6hzqbbSgEjFk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Svj9W7N7znzaBMRC42scR5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lTFajJqQjVlUj_Fjw0mwe7
          claim_id: c_bYJo7j3-rpQKDsNtASEKfF
          source_id: s_eZLm2GpVp2dGuW6q3n4HwV
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12906：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Svj9W7N7znzaBMRC42scR5
        status: active
        display_name: 王殿墀
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王光昇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光昇 | accepted |
| bio.summary | 王光昇，清人物。籍贯廬陵，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 69207） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Svj9W7N7znzaBMRC42scR5 | 王殿墀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王光昇（CBDB 69207）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69207&o=json)
