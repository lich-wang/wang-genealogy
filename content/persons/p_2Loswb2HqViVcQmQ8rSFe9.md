---
schema: wang-person/v1
id: p_2Loswb2HqViVcQmQ8rSFe9
status: active
merged_into: null
display_name: 王瑫
cbdb_id: 126779
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_74BRz1QWnpqqyA6hEo6Kwo
        subject_person_id: p_2Loswb2HqViVcQmQ8rSFe9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑫，明人物。明清進士進士，籍贯鄞縣，入仕進士，曾任道監察御史、縣令、知府。（中国历代人物传记资料库 CBDB 126779）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_y1p9UfqdbXKfihBp4KOnK4
          claim_id: c_74BRz1QWnpqqyA6hEo6Kwo
          source_id: s_Guq4H2hQkEkTKmCjpGDt7H
          stance: supports
          locator: CBDB:126779
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Guq4H2hQkEkTKmCjpGDt7H
            source_type: api_record
            title: 中国历代人物传记资料库：王瑫（CBDB 126779）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126779&o=json
            external_identifier: CBDB:126779
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_15M97bUcY6K4YHorqhK1AP
        subject_person_id: p_2Loswb2HqViVcQmQ8rSFe9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_VLtaHiAF8j2VepR1k9WKze
          claim_id: c_15M97bUcY6K4YHorqhK1AP
          source_id: s_Guq4H2hQkEkTKmCjpGDt7H
          stance: supports
          locator: CBDB:126779
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2001-2100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Y62dBJCA0oQ_cxMcpy1QvO
        subject_person_id: p_vi9ZDtvEhQ6sUw3P3TjQzS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2Loswb2HqViVcQmQ8rSFe9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zcJawQrxbahAYSGOM1U4tk
          claim_id: c_Y62dBJCA0oQ_cxMcpy1QvO
          source_id: s_Guq4H2hQkEkTKmCjpGDt7H
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第三十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: &a2
            id: s_Guq4H2hQkEkTKmCjpGDt7H
            source_type: api_record
            title: 中国历代人物传记资料库：王瑫（CBDB 126779）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126779&o=json
            external_identifier: CBDB:126779
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_vi9ZDtvEhQ6sUw3P3TjQzS
        status: active
        display_name: 王鞏謙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_A2X5_XiodI2K4pt5LLjVC4
        subject_person_id: p_2Loswb2HqViVcQmQ8rSFe9
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_H5FWp46usFqj7Em7C4CPRY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oX47GrLhcUVcfvVwaJKcqX
          claim_id: c_A2X5_XiodI2K4pt5LLjVC4
          source_id: s_kiBVGL3FBIrPv7f-IEDZwF
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第三十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_kiBVGL3FBIrPv7f-IEDZwF
            source_type: api_record
            title: 中国历代人物传记资料库：陳氏(王瑫妻)（CBDB 255906）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255906&o=json
            external_identifier: CBDB:255906
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_H5FWp46usFqj7Em7C4CPRY
        status: active
        display_name: 陳氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_ii8fPZO0bBZygbyDgOoF4a
        subject_person_id: p_WVVoR9NHuzeU7ozPKBVvNk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2Loswb2HqViVcQmQ8rSFe9
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3YkWtZfYy84cch0z0yY1M8
          claim_id: c_ii8fPZO0bBZygbyDgOoF4a
          source_id: s_Guq4H2hQkEkTKmCjpGDt7H
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第三十一名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_WVVoR9NHuzeU7ozPKBVvNk
        status: active
        display_name: 王伯智
        merged_into_person_id: null
    - claim:
        id: c_fQ0lXFMnIA7TzgNXO7Y9cD
        subject_person_id: p_jChEcNnY4t75m8QwQzbbnE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2Loswb2HqViVcQmQ8rSFe9
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CF6YBFBUY_uBWbqfnsnnJI
          claim_id: c_fQ0lXFMnIA7TzgNXO7Y9cD
          source_id: s_Guq4H2hQkEkTKmCjpGDt7H
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第三十一名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_jChEcNnY4t75m8QwQzbbnE
        status: active
        display_name: 王恂德
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王瑫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王瑫，明人物。明清進士進士，籍贯鄞縣，入仕進士，曾任道監察御史、縣令、知府。（中国历代人物传记资料库 CBDB 126779） | accepted |
| name.primary | 王瑫 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vi9ZDtvEhQ6sUw3P3TjQzS | 王鞏謙 | accepted |
| spouses | p_H5FWp46usFqj7Em7C4CPRY | 陳氏 | accepted |
| ancestors | p_WVVoR9NHuzeU7ozPKBVvNk | 王伯智 | accepted |
| ancestors | p_jChEcNnY4t75m8QwQzbbnE | 王恂德 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳氏(王瑫妻)（CBDB 255906）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255906&o=json)
- [中国历代人物传记资料库：王瑫（CBDB 126779）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126779&o=json)
