---
schema: wang-person/v1
id: p_acKqaubEQQzaaYDjdFQ4eL
status: active
merged_into: null
display_name: 王先通
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3EKdxwDswyRt5uZCr6qryJ
        subject_person_id: p_acKqaubEQQzaaYDjdFQ4eL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王先通，史料所见人物。本项目依据《余姚王氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HwTWhsqXAlvy6PaDvwrSv4
          claim_id: c_3EKdxwDswyRt5uZCr6qryJ
          source_id: s_nyzWnxJ8N3yd94sCtq4W2J
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_nyzWnxJ8N3yd94sCtq4W2J
            source_type: website
            title: 中文维基百科：余姚王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E4%BD%99%E5%A7%9A%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:07:19.469Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_aeCYfpJDNHc69xdiQzhB8B
        subject_person_id: p_acKqaubEQQzaaYDjdFQ4eL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王先通
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rbkgeUJHBMMjdf7EoKU9C9
          claim_id: c_aeCYfpJDNHc69xdiQzhB8B
          source_id: s_nyzWnxJ8N3yd94sCtq4W2J
          stance: supports
          locator: Q17498645
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Qq4bb2qcGABW32cDjECNJU
        subject_person_id: p_9ZqASz3pQauDgDi62t1P8Y
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_acKqaubEQQzaaYDjdFQ4eL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_e4ACurAFstXT7jmRXxc1A4
          claim_id: c_Qq4bb2qcGABW32cDjECNJU
          source_id: s_EhFHcfWz7Y8ks9SN62JqMv
          stance: supports
          locator: 条文：世系圖
          quotation: 余姚王氏 世系圖：王承恩 → 王先通
          interpretation_note: null
          source:
            id: s_EhFHcfWz7Y8ks9SN62JqMv
            source_type: website
            title: 中文维基百科：余姚王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E4%BD%99%E5%A7%9A%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:06.836Z
            metadata_json: null
      object_person:
        id: p_9ZqASz3pQauDgDi62t1P8Y
        status: active
        display_name: 王承恩
        merged_into_person_id: null
  children:
    - claim:
        id: c_jjs42MRhLxyK97hASYDXS2
        subject_person_id: p_acKqaubEQQzaaYDjdFQ4eL
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_UbtBRRnvS6QEr8KxT77fMG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tbd5dBRiy9f7Nzvkpir9Fv
          claim_id: c_jjs42MRhLxyK97hASYDXS2
          source_id: s_nyzWnxJ8N3yd94sCtq4W2J
          stance: supports
          locator: 条文：世系缩进（家族成员）
          quotation: 王业泰，王守仁四世孙，南明新建伯
          interpretation_note: null
          source:
            id: s_nyzWnxJ8N3yd94sCtq4W2J
            source_type: website
            title: 中文维基百科：余姚王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E4%BD%99%E5%A7%9A%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:07:19.469Z
            metadata_json: null
        - id: cs_k5KN3zWPngaGdsvXr9wbB1
          claim_id: c_jjs42MRhLxyK97hASYDXS2
          source_id: s_WkcthjFKAEuuQDGHM176DE
          stance: supports
          locator: 条文：世系缩进（家族成员）
          quotation: 王业泰，王守仁四世孙，南明新建伯
          interpretation_note: null
          source:
            id: s_WkcthjFKAEuuQDGHM176DE
            source_type: website
            title: 中文维基百科：余姚王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E4%BD%99%E5%A7%9A%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:13:15.377Z
            metadata_json: null
        - id: cs_Hcp5B86npo1MTwYHu1wAx5
          claim_id: c_jjs42MRhLxyK97hASYDXS2
          source_id: s_YTVUDZpBSvxpCDAgTsyM8f
          stance: supports
          locator: 条文：世系缩进（家族成员）
          quotation: 王业泰，王守仁四世孙，南明新建伯
          interpretation_note: null
          source:
            id: s_YTVUDZpBSvxpCDAgTsyM8f
            source_type: website
            title: 中文维基百科：余姚王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E4%BD%99%E5%A7%9A%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:51:16.946Z
            metadata_json: null
        - id: cs_fTa3wBJPf8Fy8DWewP8Nce
          claim_id: c_jjs42MRhLxyK97hASYDXS2
          source_id: s_xL1sKif1HsCT5qfGdqajvA
          stance: supports
          locator: 条文：世系缩进（家族成员）
          quotation: 王业泰，王守仁四世孙，南明新建伯
          interpretation_note: null
          source:
            id: s_xL1sKif1HsCT5qfGdqajvA
            source_type: website
            title: 中文维基百科：余姚王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E4%BD%99%E5%A7%9A%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:04.592Z
            metadata_json: null
        - id: cs_EpuiPi1sa6osZ7JTDn6GXC
          claim_id: c_jjs42MRhLxyK97hASYDXS2
          source_id: s_EhFHcfWz7Y8ks9SN62JqMv
          stance: supports
          locator: 条文：世系缩进（家族成员）
          quotation: 王业泰，王守仁四世孙，南明新建伯
          interpretation_note: null
          source:
            id: s_EhFHcfWz7Y8ks9SN62JqMv
            source_type: website
            title: 中文维基百科：余姚王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E4%BD%99%E5%A7%9A%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:06.836Z
            metadata_json: null
      object_person:
        id: p_UbtBRRnvS6QEr8KxT77fMG
        status: active
        display_name: 王业泰
        merged_into_person_id: null
    - claim:
        id: c_WBdJhiddTqN1Py4KpCkkNT
        subject_person_id: p_acKqaubEQQzaaYDjdFQ4eL
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_je8NyYYjAr8umjXDg3TkJY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5wa9ZW7ApEN5NLfAx5SaHN
          claim_id: c_WBdJhiddTqN1Py4KpCkkNT
          source_id: s_EhFHcfWz7Y8ks9SN62JqMv
          stance: supports
          locator: 条文：世系圖
          quotation: 余姚王氏 世系圖：王先通 → 王业盛
          interpretation_note: null
          source:
            id: s_EhFHcfWz7Y8ks9SN62JqMv
            source_type: website
            title: 中文维基百科：余姚王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E4%BD%99%E5%A7%9A%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:06.836Z
            metadata_json: null
      object_person:
        id: p_je8NyYYjAr8umjXDg3TkJY
        status: active
        display_name: 王业盛
        merged_into_person_id: null
    - claim:
        id: c_yu3zM6JxgwQgFD22XiNj6o
        subject_person_id: p_acKqaubEQQzaaYDjdFQ4eL
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_bPZKnxp2HexKh3HJLbRwVw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_r8ZxAxbByRPy1s3CsruV5s
          claim_id: c_yu3zM6JxgwQgFD22XiNj6o
          source_id: s_EhFHcfWz7Y8ks9SN62JqMv
          stance: supports
          locator: 条文：世系圖
          quotation: 余姚王氏 世系圖：王先通 → 王业耀
          interpretation_note: null
          source:
            id: s_EhFHcfWz7Y8ks9SN62JqMv
            source_type: website
            title: 中文维基百科：余姚王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E4%BD%99%E5%A7%9A%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:06.836Z
            metadata_json: null
      object_person:
        id: p_bPZKnxp2HexKh3HJLbRwVw
        status: active
        display_name: 王业耀
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_XNevyAkRyKNdWMuBC6DvbM
        subject_person_id: p_TQiMhGLRXGBc7HWBFHEr7P
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_acKqaubEQQzaaYDjdFQ4eL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7ZXiS43vxj7JCN5bm1WXqM
          claim_id: c_XNevyAkRyKNdWMuBC6DvbM
          source_id: s_YTVUDZpBSvxpCDAgTsyM8f
          stance: supports
          locator: 条文：条文识读（玄孙）（4世）
          quotation: 王先通，王守仁玄孙，世袭新建伯
          interpretation_note: null
          source:
            id: s_YTVUDZpBSvxpCDAgTsyM8f
            source_type: website
            title: 中文维基百科：余姚王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E4%BD%99%E5%A7%9A%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:51:16.946Z
            metadata_json: null
        - id: cs_Xs1yzam4WiV5vAKoUrM7R5
          claim_id: c_XNevyAkRyKNdWMuBC6DvbM
          source_id: s_xL1sKif1HsCT5qfGdqajvA
          stance: supports
          locator: 条文：条文识读（玄孙）（4世）
          quotation: 王先通，王守仁玄孙
          interpretation_note: null
          source:
            id: s_xL1sKif1HsCT5qfGdqajvA
            source_type: website
            title: 中文维基百科：余姚王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E4%BD%99%E5%A7%9A%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:04.592Z
            metadata_json: null
        - id: cs_44rD9jCu7RbWFCjugh64ud
          claim_id: c_XNevyAkRyKNdWMuBC6DvbM
          source_id: s_EhFHcfWz7Y8ks9SN62JqMv
          stance: supports
          locator: 条文：条文识读（玄孙）（4世）
          quotation: 王先通，王守仁玄孙，世袭新建伯，左军都督府都督，亲军统领
          interpretation_note: null
          source:
            id: s_EhFHcfWz7Y8ks9SN62JqMv
            source_type: website
            title: 中文维基百科：余姚王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E4%BD%99%E5%A7%9A%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:06.836Z
            metadata_json: null
      object_person:
        id: p_TQiMhGLRXGBc7HWBFHEr7P
        status: active
        display_name: 王守仁
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王先通

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王先通，史料所见人物。本项目依据《余姚王氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王先通 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9ZqASz3pQauDgDi62t1P8Y | 王承恩 | accepted |
| children | p_UbtBRRnvS6QEr8KxT77fMG | 王业泰 | accepted |
| children | p_je8NyYYjAr8umjXDg3TkJY | 王业盛 | accepted |
| children | p_bPZKnxp2HexKh3HJLbRwVw | 王业耀 | accepted |
| ancestors | p_TQiMhGLRXGBc7HWBFHEr7P | 王守仁 | accepted |

## 外部来源

- [中文维基百科：余姚王氏](https://zh.wikipedia.org/wiki/%E4%BD%99%E5%A7%9A%E7%8E%8B%E6%B0%8F)
