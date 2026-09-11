---
schema: wang-person/v1
id: p_YA1G7T5veW43cswnoFX8Ym
status: active
merged_into: null
display_name: 王智
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MCmZjUirhQu1YTGmM6LfiU
        subject_person_id: p_YA1G7T5veW43cswnoFX8Ym
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王智
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DDHonqQgLGuHrd4jJqEQqP
          claim_id: c_MCmZjUirhQu1YTGmM6LfiU
          source_id: s_pMJQrWJWFg3NGRVbPsxdgJ
          stance: supports
          locator: CBDB:198244
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198244）
          source: &a1
            id: s_pMJQrWJWFg3NGRVbPsxdgJ
            source_type: api_record
            title: 中国历代人物传记资料库：王智（CBDB 198244）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198244&o=json
            external_identifier: CBDB:198244
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.477Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_cMZ94rNq2o95SGvgHpBeM9
        subject_person_id: p_YA1G7T5veW43cswnoFX8Ym
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1417年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6KdAaAe2WXUZLXUDQfg4q1
          claim_id: c_cMZ94rNq2o95SGvgHpBeM9
          source_id: s_pMJQrWJWFg3NGRVbPsxdgJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_H8pCYEM8fVV9FG6h4rbP3D
        subject_person_id: p_YA1G7T5veW43cswnoFX8Ym
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王智（生于1417年），明人物。明清進士進士，籍贯瀘州，入仕進士。（中国历代人物传记资料库 CBDB 198244）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XThJundxtBgsdz2tsxbDCP
          claim_id: c_H8pCYEM8fVV9FG6h4rbP3D
          source_id: s_pMJQrWJWFg3NGRVbPsxdgJ
          stance: supports
          locator: CBDB:198244
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_U7HJ1P-1e8R5oslTLmk_qL
        subject_person_id: p_7qmh6ExHEGb6N6NWE8gC5i
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YA1G7T5veW43cswnoFX8Ym
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BjxP37B86LLld-lJIY8FrT
          claim_id: c_U7HJ1P-1e8R5oslTLmk_qL
          source_id: s_LaGtXL8bZHaMgGiByUGfsR
          stance: supports
          locator: 景泰二年進士登科錄:一卷，第三甲第九十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LaGtXL8bZHaMgGiByUGfsR
            source_type: api_record
            title: 中国历代人物传记资料库：王昭（CBDB 245152）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245152&o=json
            external_identifier: CBDB:245152
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.053Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7qmh6ExHEGb6N6NWE8gC5i
        status: active
        display_name: 王昭
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_lUvdS4uXECpdO-zW1y7Z34
        subject_person_id: p_5CiwpaT532KeioGvv2CHML
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_YA1G7T5veW43cswnoFX8Ym
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b6OrNKbyPzRZHuIf6qXyrK
          claim_id: c_lUvdS4uXECpdO-zW1y7Z34
          source_id: s_7MzCrChNbzFuhRgmoh5ByL
          stance: supports
          locator: 景泰二年進士登科錄:一卷，第三甲第九十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7MzCrChNbzFuhRgmoh5ByL
            source_type: api_record
            title: 中国历代人物传记资料库：王國才（CBDB 245130）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245130&o=json
            external_identifier: CBDB:245130
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.052Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5CiwpaT532KeioGvv2CHML
        status: active
        display_name: 王國才
        merged_into_person_id: null
    - claim:
        id: c_lZvVHW-UqlBaqq_yL5KDfx
        subject_person_id: p_uzqpzNGoBs7AcESxEaJR7X
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_YA1G7T5veW43cswnoFX8Ym
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kGfUmsKYaYjSa8rp8tRdRh
          claim_id: c_lZvVHW-UqlBaqq_yL5KDfx
          source_id: s_xmxXLzitZgkEH1oGHMZtAZ
          stance: supports
          locator: 景泰二年進士登科錄:一卷，第三甲第九十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xmxXLzitZgkEH1oGHMZtAZ
            source_type: api_record
            title: 中国历代人物传记资料库：王興祖（CBDB 245141）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245141&o=json
            external_identifier: CBDB:245141
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.053Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_uzqpzNGoBs7AcESxEaJR7X
        status: active
        display_name: 王興祖
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王智

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王智 | accepted |
| birth.date | 1417年 | accepted |
| bio.summary | 王智（生于1417年），明人物。明清進士進士，籍贯瀘州，入仕進士。（中国历代人物传记资料库 CBDB 198244） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7qmh6ExHEGb6N6NWE8gC5i | 王昭 | accepted |
| ancestors | p_5CiwpaT532KeioGvv2CHML | 王國才 | accepted |
| ancestors | p_uzqpzNGoBs7AcESxEaJR7X | 王興祖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國才（CBDB 245130）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245130&o=json)
- [中国历代人物传记资料库：王興祖（CBDB 245141）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245141&o=json)
- [中国历代人物传记资料库：王昭（CBDB 245152）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245152&o=json)
- [中国历代人物传记资料库：王智（CBDB 198244）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198244&o=json)
