---
schema: wang-person/v1
id: p_DaKV7vMkqqw2926e457rTM
status: active
merged_into: null
display_name: 王逊
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LnRbKHUtbsX0C8i1EZjL5F
        subject_person_id: p_DaKV7vMkqqw2926e457rTM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逊（?—?），南朝宋，南朝齐时琅邪郡临沂县人，王僧绰之子，王俭之弟。 宋顺帝时王逊任丹阳丞。他告发刘秉谋反，将要偷袭萧道成。萧道成建立南朝齐，是为齐高帝，但是没有给他封赏。于是王逊有怨言。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_34-BWsPseU3HZyLS8qPJjl
          claim_id: c_LnRbKHUtbsX0C8i1EZjL5F
          source_id: s_SHJwBdDjndZLfEyAJNe9Ak
          stance: supports
          locator: 导言
          quotation: 王逊（?—?），南朝宋，南朝齐时琅邪郡临沂县人，王僧绰之子，王俭
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source: &a1
            id: s_SHJwBdDjndZLfEyAJNe9Ak
            source_type: website
            title: 中文维基百科：王逊 (南朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%80%8A_(%E5%8D%97%E6%9C%9D)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:48.355Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KxtgFPX4rT4XCWPvaGrpCX
        subject_person_id: p_DaKV7vMkqqw2926e457rTM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逊
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gUNTb3u69LksqsUpEHgr8u
          claim_id: c_KxtgFPX4rT4XCWPvaGrpCX
          source_id: s_SHJwBdDjndZLfEyAJNe9Ak
          stance: supports
          locator: Q120698542
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_sNFiDx6x7G9qN6oWw4Sggy
        subject_person_id: p_wZDz78cKE5G7JTVc18RWBx
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_DaKV7vMkqqw2926e457rTM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GVfYsqNu7dH1mFXPuB8zaV
          claim_id: c_sNFiDx6x7G9qN6oWw4Sggy
          source_id: s_SHJwBdDjndZLfEyAJNe9Ak
          stance: supports
          locator: 条文：之子/之女
          quotation: 王逊，南朝宋，南朝齐时琅邪郡临沂县人，王僧绰之子，王俭之弟
          interpretation_note: null
          source:
            id: s_SHJwBdDjndZLfEyAJNe9Ak
            source_type: website
            title: 中文维基百科：王逊 (南朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%80%8A_(%E5%8D%97%E6%9C%9D)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:48.355Z
            metadata_json: null
      object_person:
        id: p_wZDz78cKE5G7JTVc18RWBx
        status: active
        display_name: 王僧綽
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王逊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王逊（?—?），南朝宋，南朝齐时琅邪郡临沂县人，王僧绰之子，王俭之弟。 宋顺帝时王逊任丹阳丞。他告发刘秉谋反，将要偷袭萧道成。萧道成建立南朝齐，是为齐高帝，但是没有给他封赏。于是王逊有怨言。 | accepted |
| name.primary | 王逊 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wZDz78cKE5G7JTVc18RWBx | 王僧綽 | accepted |

## 外部来源

- [中文维基百科：王逊 (南朝)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%80%8A_(%E5%8D%97%E6%9C%9D))
