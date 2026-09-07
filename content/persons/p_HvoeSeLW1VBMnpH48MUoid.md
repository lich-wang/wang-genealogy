---
schema: wang-person/v1
id: p_HvoeSeLW1VBMnpH48MUoid
status: active
merged_into: null
display_name: 王遂
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3Q7T8XWWCLm2DzCRgemTiZ
        subject_person_id: p_HvoeSeLW1VBMnpH48MUoid
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遂，王莽高祖父。维基数据以独立条目 Q2047554 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_GoI5rNbdWDbOqNRUR4WaNb
          claim_id: c_3Q7T8XWWCLm2DzCRgemTiZ
          source_id: s_KmS3dL2ih2RbiaB2MWtKLs
          stance: supports
          locator: Q2047554
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_bKFksjNFp7G4BKMHFBP4w5
        subject_person_id: p_HvoeSeLW1VBMnpH48MUoid
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遂
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Xh7GyE1cm6NH3PKa1of6Gm
          claim_id: c_bKFksjNFp7G4BKMHFBP4w5
          source_id: s_KmS3dL2ih2RbiaB2MWtKLs
          stance: supports
          locator: Q2047554
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
        id: p_mJcAUgUTp3XWHKDKvLh6Kt
        status: active
        display_name: 王贺
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王遂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王遂，王莽高祖父。维基数据以独立条目 Q2047554 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王遂 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_mJcAUgUTp3XWHKDKvLh6Kt | 王贺 | accepted |

## 外部来源

- [维基数据：王贺（Q2360216）](https://www.wikidata.org/wiki/Q2360216)
- [维基数据：王遂（Q2047554）](https://www.wikidata.org/wiki/Q2047554)
- [中文维基百科：王遂 (汉朝)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%81%82_(%E6%B1%89%E6%9C%9D))
