---
schema: wang-person/v1
id: p_dNbcibvajSXBYgSvME8CE6
status: active
merged_into: null
display_name: 王玉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Jdc4N4bL136DvGdey8Kpk9
        subject_person_id: p_dNbcibvajSXBYgSvME8CE6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PYUBLeRWq4JBxJfsHV38Yr
          claim_id: c_Jdc4N4bL136DvGdey8Kpk9
          source_id: s_DpzAwGANuGaaryEQnDijHj
          stance: supports
          locator: CBDB:283695
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（283695）
          source: &a1
            id: s_DpzAwGANuGaaryEQnDijHj
            source_type: api_record
            title: 中国历代人物传记资料库：王玉（CBDB 283695）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283695&o=json
            external_identifier: CBDB:283695
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.148Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_47rmd2KxENfeEzm43CBHiQ
        subject_person_id: p_dNbcibvajSXBYgSvME8CE6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉，明人物。正德十六年進士，籍贯會稽，曾任都指揮同知、錦衣衛都指揮同知、漕運參將。（中国历代人物传记资料库 CBDB 283695）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hzayqT9D4iFwOtAgB4mSzO
          claim_id: c_47rmd2KxENfeEzm43CBHiQ
          source_id: s_DpzAwGANuGaaryEQnDijHj
          stance: supports
          locator: CBDB:283695
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_-spPFdJX8F8qXJ2oyOFgtX
        subject_person_id: p_dNbcibvajSXBYgSvME8CE6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VzREVG9zqkmWPrWDHfGpmG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q76CzQbilqRHviKOmTCejN
          claim_id: c_-spPFdJX8F8qXJ2oyOFgtX
          source_id: s_DpzAwGANuGaaryEQnDijHj
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第六十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_VzREVG9zqkmWPrWDHfGpmG
        status: active
        display_name: 王楊
        merged_into_person_id: null
    - claim:
        id: c_qzG60H4eOnvWP3Z2ZVJ9P-
        subject_person_id: p_dNbcibvajSXBYgSvME8CE6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GDYJiKmBDGx8GATz5Lz7eZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CS91qL343IoMq49jAPM25V
          claim_id: c_qzG60H4eOnvWP3Z2ZVJ9P-
          source_id: s_DpzAwGANuGaaryEQnDijHj
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第二甲第五十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GDYJiKmBDGx8GATz5Lz7eZ
        status: active
        display_name: 王楠
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玉 | accepted |
| bio.summary | 王玉，明人物。正德十六年進士，籍贯會稽，曾任都指揮同知、錦衣衛都指揮同知、漕運參將。（中国历代人物传记资料库 CBDB 283695） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_VzREVG9zqkmWPrWDHfGpmG | 王楊 | accepted |
| children | p_GDYJiKmBDGx8GATz5Lz7eZ | 王楠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王玉（CBDB 283695）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283695&o=json)
