---
schema: wang-person/v1
id: p_8uNUQvi293HuAyjPDSunag
status: active
merged_into: null
display_name: 王應超
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TDMnJ3h52xWJqj6UdQG25v
        subject_person_id: p_8uNUQvi293HuAyjPDSunag
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應超
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NQMj11KDyUpDZ9b3omD7fo
          claim_id: c_TDMnJ3h52xWJqj6UdQG25v
          source_id: s_QztKYy3xASZdxQsrCDfZS8
          stance: supports
          locator: CBDB:551389
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（551389）
          source: &a1
            id: s_QztKYy3xASZdxQsrCDfZS8
            source_type: api_record
            title: 中国历代人物传记资料库：王應超（CBDB 551389）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551389&o=json
            external_identifier: CBDB:551389
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.591Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_X4X3KqQcQNShQW4UXRgLCH
        subject_person_id: p_8uNUQvi293HuAyjPDSunag
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應超，清人物。籍贯婺源，入仕鄉貢舉人，曾任知縣、知州。（中国历代人物传记资料库 CBDB 551389）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9jnHwCXvm5sio0u6zT15hi
          claim_id: c_X4X3KqQcQNShQW4UXRgLCH
          source_id: s_QztKYy3xASZdxQsrCDfZS8
          stance: supports
          locator: CBDB:551389
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ynVz7gj2LxAtxFW1_IgStV
        subject_person_id: p_sgFwSYG2RsvjHFjEuyLwo4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8uNUQvi293HuAyjPDSunag
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jxADhuiyCCJw03jP2pD4a8
          claim_id: c_ynVz7gj2LxAtxFW1_IgStV
          source_id: s_QztKYy3xASZdxQsrCDfZS8
          stance: supports
          locator: (道光)徽州府志:十六卷卷首一卷，lgid=1160562：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sgFwSYG2RsvjHFjEuyLwo4
        status: active
        display_name: 王煜文
        merged_into_person_id: null
  children:
    - claim:
        id: c_UDuiKOk0-y7_szLL8HOtnC
        subject_person_id: p_8uNUQvi293HuAyjPDSunag
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Wyi1p6q97DrtfBULc8fRhf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BnUdfMixAIYrG5jeQjp8tO
          claim_id: c_UDuiKOk0-y7_szLL8HOtnC
          source_id: s_QztKYy3xASZdxQsrCDfZS8
          stance: supports
          locator: (道光)徽州府志:十六卷卷首一卷，lgid=1160854：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Wyi1p6q97DrtfBULc8fRhf
        status: active
        display_name: 王佩蘇
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_dsM74jlk53AWe_RmCKoe1E
        subject_person_id: p_Lag4sfewwEYeWDkfJpeQ26
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_8uNUQvi293HuAyjPDSunag
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6943FBaylj8RyDkdZ_itrz
          claim_id: c_dsM74jlk53AWe_RmCKoe1E
          source_id: s_QztKYy3xASZdxQsrCDfZS8
          stance: supports
          locator: (道光)徽州府志:十六卷卷首一卷，lgid=1160984：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Lag4sfewwEYeWDkfJpeQ26
        status: active
        display_name: 王廷槐
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王應超

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應超 | accepted |
| bio.summary | 王應超，清人物。籍贯婺源，入仕鄉貢舉人，曾任知縣、知州。（中国历代人物传记资料库 CBDB 551389） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_sgFwSYG2RsvjHFjEuyLwo4 | 王煜文 | accepted |
| children | p_Wyi1p6q97DrtfBULc8fRhf | 王佩蘇 | accepted |
| ancestors | p_Lag4sfewwEYeWDkfJpeQ26 | 王廷槐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應超（CBDB 551389）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551389&o=json)
