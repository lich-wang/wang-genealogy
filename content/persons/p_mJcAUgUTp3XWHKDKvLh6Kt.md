---
schema: wang-person/v1
id: p_mJcAUgUTp3XWHKDKvLh6Kt
status: active
merged_into: null
display_name: 王贺
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KhGfzDTrSu6D93f38SWm8E
        subject_person_id: p_mJcAUgUTp3XWHKDKvLh6Kt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王贺，王莽曾祖父。维基数据以独立条目 Q2360216 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_Z7EPrNtvRiFOVJlV8himwi
          claim_id: c_KhGfzDTrSu6D93f38SWm8E
          source_id: s_iV5PcUZhdFTU7c7u3DYruh
          stance: supports
          locator: Q2360216
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_iV5PcUZhdFTU7c7u3DYruh
            source_type: api_record
            title: 维基数据：王贺（Q2360216）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2360216
            external_identifier: Q2360216
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:42.011Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B4%BA
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_YeiPEEHkmUw3imEmgjNZet
        subject_person_id: p_mJcAUgUTp3XWHKDKvLh6Kt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王贺
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6Lm7r1BVNMdKsKBMZZcJaL
          claim_id: c_YeiPEEHkmUw3imEmgjNZet
          source_id: s_iV5PcUZhdFTU7c7u3DYruh
          stance: supports
          locator: Q2360216
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Vs6CYWdDxCXL61Eg6NSimB
        subject_person_id: p_HvoeSeLW1VBMnpH48MUoid
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mJcAUgUTp3XWHKDKvLh6Kt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_vCBcw1M1Us72vSVk1v4qkd
          claim_id: c_Vs6CYWdDxCXL61Eg6NSimB
          source_id: s_iV5PcUZhdFTU7c7u3DYruh
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_iV5PcUZhdFTU7c7u3DYruh
            source_type: api_record
            title: 维基数据：王贺（Q2360216）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2360216
            external_identifier: Q2360216
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:42.011Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B4%BA
        - id: cs_voRz4NhHfiv57mFyf2MUNB
          claim_id: c_Vs6CYWdDxCXL61Eg6NSimB
          source_id: s_KmS3dL2ih2RbiaB2MWtKLs
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_KmS3dL2ih2RbiaB2MWtKLs
            source_type: api_record
            title: 维基数据：王遂（Q2047554）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2047554
            external_identifier: Q2047554
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:17.813Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%81%82_(%E6%B1%89%E6%9C%9D)
        - id: cs_DSrMbouivT4XNnMa6BBeQw
          claim_id: c_Vs6CYWdDxCXL61Eg6NSimB
          source_id: s_xjkbnPTg5TiivTw1iA2VeW
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 儿子王贺为绣衣直指御史
          interpretation_note: null
          source:
            id: s_xjkbnPTg5TiivTw1iA2VeW
            source_type: website
            title: 中文维基百科：王遂 (汉朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%81%82_(%E6%B1%89%E6%9C%9D)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:56:30.700Z
            metadata_json: null
      object_person:
        id: p_HvoeSeLW1VBMnpH48MUoid
        status: active
        display_name: 王遂
        merged_into_person_id: null
  children:
    - claim:
        id: c_rD64D4rfC4NSPRyH23cg67
        subject_person_id: p_mJcAUgUTp3XWHKDKvLh6Kt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xN7tAHKk6W68mdWgNxHCZz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_wcxN2hgkLLs7j9cmVKbpDa
          claim_id: c_rD64D4rfC4NSPRyH23cg67
          source_id: s_6FVNxhGNZGZenpLdtfzxFq
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_6FVNxhGNZGZenpLdtfzxFq
            source_type: api_record
            title: 維基數據：王禁（Q2979420）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2979420
            external_identifier: Q2979420
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:27.787Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A6%81
        - id: cs_SeaSdq29PLLo9d3i9HBcPd
          claim_id: c_rD64D4rfC4NSPRyH23cg67
          source_id: s_iV5PcUZhdFTU7c7u3DYruh
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_iV5PcUZhdFTU7c7u3DYruh
            source_type: api_record
            title: 维基数据：王贺（Q2360216）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2360216
            external_identifier: Q2360216
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:42.011Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B4%BA
      object_person:
        id: p_xN7tAHKk6W68mdWgNxHCZz
        status: active
        display_name: 王禁
        merged_into_person_id: null
    - claim:
        id: c_QipivYv94Bh5WpJPTfGV3j
        subject_person_id: p_mJcAUgUTp3XWHKDKvLh6Kt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KXoEHYGYGzQ1XCX8TaUgvH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_HXRrmrxaGzJin5M8hVBKKF
          claim_id: c_QipivYv94Bh5WpJPTfGV3j
          source_id: s_iV5PcUZhdFTU7c7u3DYruh
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_iV5PcUZhdFTU7c7u3DYruh
            source_type: api_record
            title: 维基数据：王贺（Q2360216）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2360216
            external_identifier: Q2360216
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:42.011Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B4%BA
        - id: cs_1HzXFwr7VMuGNEVYG4SGf2
          claim_id: c_QipivYv94Bh5WpJPTfGV3j
          source_id: s_t8EeUpQe1W5PXZJpHYqA6h
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_t8EeUpQe1W5PXZJpHYqA6h
            source_type: api_record
            title: 维基数据：王弘（Q2168087）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2168087
            external_identifier: Q2168087
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:17.813Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BC%98_(%E8%A5%BF%E6%B1%89)
      object_person:
        id: p_KXoEHYGYGzQ1XCX8TaUgvH
        status: active
        display_name: 王弘
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王贺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王贺，王莽曾祖父。维基数据以独立条目 Q2360216 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王贺 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HvoeSeLW1VBMnpH48MUoid | 王遂 | accepted |
| children | p_xN7tAHKk6W68mdWgNxHCZz | 王禁 | accepted |
| children | p_KXoEHYGYGzQ1XCX8TaUgvH | 王弘 | accepted |

## 外部来源

- [维基数据：王贺（Q2360216）](https://www.wikidata.org/wiki/Q2360216)
- [维基数据：王弘（Q2168087）](https://www.wikidata.org/wiki/Q2168087)
- [维基数据：王遂（Q2047554）](https://www.wikidata.org/wiki/Q2047554)
- [維基數據：王禁（Q2979420）](https://www.wikidata.org/wiki/Q2979420)
- [中文维基百科：王遂 (汉朝)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%81%82_(%E6%B1%89%E6%9C%9D))
