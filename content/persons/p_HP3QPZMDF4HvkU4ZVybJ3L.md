---
schema: wang-person/v1
id: p_HP3QPZMDF4HvkU4ZVybJ3L
status: active
merged_into: null
display_name: 王翬
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_96qbAdXLcGq1Sxqdya5D4E
        subject_person_id: p_HP3QPZMDF4HvkU4ZVybJ3L
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翬（1632年—1717年），字石谷，號耕煙散人、烏目山人、清暉老人，蘇州府常熟縣人，清初畫家。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qApNiZ8kEGJ_0Z7ki5KbfM
          claim_id: c_96qbAdXLcGq1Sxqdya5D4E
          source_id: s_MnoGmuNtvYKFRB1SUnYsyW
          stance: supports
          locator: 导言
          quotation: 王翬（1632年—1717年），字石谷，號耕煙散人、烏目山人、清
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source: &a1
            id: s_MnoGmuNtvYKFRB1SUnYsyW
            source_type: website
            title: 中文维基百科：王翬
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BF%AC
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:14.441Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DRJ1Nb1eVsXHgcwtACsZTF
        subject_person_id: p_HP3QPZMDF4HvkU4ZVybJ3L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翬
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5YxSPxbHHCc2PSzD9yZspm
          claim_id: c_DRJ1Nb1eVsXHgcwtACsZTF
          source_id: s_MnoGmuNtvYKFRB1SUnYsyW
          stance: supports
          locator: Q716222
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FJNimY5qTTMQ5419dBoh6j
        subject_person_id: p_i94mkoq2UuXwctPBX1QJx8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HP3QPZMDF4HvkU4ZVybJ3L
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_xr1DvjddtUGD7FqEJUMDJU
          claim_id: c_FJNimY5qTTMQ5419dBoh6j
          source_id: s_MnoGmuNtvYKFRB1SUnYsyW
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 父王雲客善畫山水。
          interpretation_note: null
          source:
            id: s_MnoGmuNtvYKFRB1SUnYsyW
            source_type: website
            title: 中文维基百科：王翬
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BF%AC
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:14.441Z
            metadata_json: null
      object_person:
        id: p_i94mkoq2UuXwctPBX1QJx8
        status: active
        display_name: 王雲客
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_ATvv7faDvrYhCUaQCt6w4R
        subject_person_id: p_tRyKMFAHV4LzYocPjEg6Pz
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_HP3QPZMDF4HvkU4ZVybJ3L
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Y8AiHQ7KJDpBBE5ZW8KZBX
          claim_id: c_ATvv7faDvrYhCUaQCt6w4R
          source_id: s_MnoGmuNtvYKFRB1SUnYsyW
          stance: supports
          locator: 条文：条文识读（曾祖）（3世）
          quotation: 曾祖王伯臣善畫花鳥，祖父王載仕擅長山水。
          interpretation_note: null
          source:
            id: s_MnoGmuNtvYKFRB1SUnYsyW
            source_type: website
            title: 中文维基百科：王翬
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BF%AC
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:14.441Z
            metadata_json: null
      object_person:
        id: p_tRyKMFAHV4LzYocPjEg6Pz
        status: active
        display_name: 王伯臣
        merged_into_person_id: null
    - claim:
        id: c_bmHLxUuidAc92wHre662XV
        subject_person_id: p_WeaXMTEoyUNJGMmtXxsHnc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_HP3QPZMDF4HvkU4ZVybJ3L
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CLw3zi61C533uqXJydbTUr
          claim_id: c_bmHLxUuidAc92wHre662XV
          source_id: s_MnoGmuNtvYKFRB1SUnYsyW
          stance: supports
          locator: 条文：条文识读（祖父）（3世）
          quotation: 曾祖王伯臣善畫花鳥，祖父王載仕擅長山水。
          interpretation_note: null
          source:
            id: s_MnoGmuNtvYKFRB1SUnYsyW
            source_type: website
            title: 中文维基百科：王翬
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BF%AC
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:14.441Z
            metadata_json: null
      object_person:
        id: p_WeaXMTEoyUNJGMmtXxsHnc
        status: active
        display_name: 王載仕
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_beCnBTw8fj4JHC7VSHZycu
        subject_person_id: p_HP3QPZMDF4HvkU4ZVybJ3L
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5uJP6L44zTgzkGtKA7u3U6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2LwDFmdvyWC1YDVDerWZzQ
          claim_id: c_beCnBTw8fj4JHC7VSHZycu
          source_id: s_MnoGmuNtvYKFRB1SUnYsyW
          stance: supports
          locator: 条文：条文识读（曾孫）（3世）
          quotation: 曾孫王玖為"小四王"之一。
          interpretation_note: null
          source:
            id: s_MnoGmuNtvYKFRB1SUnYsyW
            source_type: website
            title: 中文维基百科：王翬
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BF%AC
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:14.441Z
            metadata_json: null
      object_person:
        id: p_5uJP6L44zTgzkGtKA7u3U6
        status: active
        display_name: 王玖
        merged_into_person_id: null
    - claim:
        id: c_DJgQya5pKHuvp2B67vKBdU
        subject_person_id: p_HP3QPZMDF4HvkU4ZVybJ3L
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_UUTiEGTb2nYZF3pAYB7F5s
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6uYrpsZ93j7eEQdwscY7wU
          claim_id: c_DJgQya5pKHuvp2B67vKBdU
          source_id: s_MnoGmuNtvYKFRB1SUnYsyW
          stance: supports
          locator: 条文：条文识读（孫）
          quotation: 王玖兩子王廷元、王廷周均為"後四王"之一。
          interpretation_note: null
          source:
            id: s_MnoGmuNtvYKFRB1SUnYsyW
            source_type: website
            title: 中文维基百科：王翬
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BF%AC
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:14.441Z
            metadata_json: null
      object_person:
        id: p_UUTiEGTb2nYZF3pAYB7F5s
        status: active
        display_name: 王廷元
        merged_into_person_id: null
    - claim:
        id: c_uvAHd4Vgmfj7i4ZJtdZV8X
        subject_person_id: p_HP3QPZMDF4HvkU4ZVybJ3L
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_pmeaCZG41NMcEnigKQEnAB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7DxFgJrF1RjTFohXtq2uXD
          claim_id: c_uvAHd4Vgmfj7i4ZJtdZV8X
          source_id: s_MnoGmuNtvYKFRB1SUnYsyW
          stance: supports
          locator: 条文：条文识读（孫）
          quotation: 王玖兩子王廷元、王廷周均為"後四王"之一。
          interpretation_note: null
          source:
            id: s_MnoGmuNtvYKFRB1SUnYsyW
            source_type: website
            title: 中文维基百科：王翬
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BF%AC
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:14.441Z
            metadata_json: null
      object_person:
        id: p_pmeaCZG41NMcEnigKQEnAB
        status: active
        display_name: 王廷周
        merged_into_person_id: null
  other: []
---

# 王翬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王翬（1632年—1717年），字石谷，號耕煙散人、烏目山人、清暉老人，蘇州府常熟縣人，清初畫家。 | accepted |
| name.primary | 王翬 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_i94mkoq2UuXwctPBX1QJx8 | 王雲客 | accepted |
| ancestors | p_tRyKMFAHV4LzYocPjEg6Pz | 王伯臣 | accepted |
| ancestors | p_WeaXMTEoyUNJGMmtXxsHnc | 王載仕 | accepted |
| descendants | p_5uJP6L44zTgzkGtKA7u3U6 | 王玖 | accepted |
| descendants | p_UUTiEGTb2nYZF3pAYB7F5s | 王廷元 | accepted |
| descendants | p_pmeaCZG41NMcEnigKQEnAB | 王廷周 | accepted |

## 外部来源

- [中文维基百科：王翬](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BF%AC)
