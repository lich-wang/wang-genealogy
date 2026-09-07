---
schema: wang-person/v1
id: p_LNfZ5qzHVynGTRpmH784JC
status: active
merged_into: null
display_name: 王瓘
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UvzW4NDkeH2ynwNrHPElU6
        subject_person_id: p_LNfZ5qzHVynGTRpmH784JC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓘（1422年—？），字廷用，河南河南府陝州人，軍籍，明朝政治人物。同進士出身。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_y5lBqKPS3ig9ogqAAil9On
          claim_id: c_UvzW4NDkeH2ynwNrHPElU6
          source_id: s_LrXVeZAKgNxTqQ6xTfH7kn
          stance: supports
          locator: 导言
          quotation: 王瓘（1422年—？），字廷用，河南河南府陝州人，軍籍，明朝政治
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source: &a1
            id: s_LrXVeZAKgNxTqQ6xTfH7kn
            source_type: website
            title: 中文维基百科：王瓘
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%93%98
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:51.888Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_iC7CKHYiZsjFFUj6ayBWqJ
        subject_person_id: p_LNfZ5qzHVynGTRpmH784JC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓘
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tcUXNiHrdtJaSRZbGBtxXi
          claim_id: c_iC7CKHYiZsjFFUj6ayBWqJ
          source_id: s_LrXVeZAKgNxTqQ6xTfH7kn
          stance: supports
          locator: Q45461985
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Pvhp4NuyQvW3n7LmXZTFBd
        subject_person_id: p_MZ5fRBokK8Fw8dv1gYuPnt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LNfZ5qzHVynGTRpmH784JC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_KCeAhfEVE5bbcKpw5KdAeC
          claim_id: c_Pvhp4NuyQvW3n7LmXZTFBd
          source_id: s_LrXVeZAKgNxTqQ6xTfH7kn
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 父亲王郁
          interpretation_note: null
          source:
            id: s_LrXVeZAKgNxTqQ6xTfH7kn
            source_type: website
            title: 中文维基百科：王瓘
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%93%98
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:51.888Z
            metadata_json: null
      object_person:
        id: p_MZ5fRBokK8Fw8dv1gYuPnt
        status: active
        display_name: 王郁
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_BhngePQwq824Ano5qAp3TR
        subject_person_id: p_LNfZ5qzHVynGTRpmH784JC
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_VUpUP7oSKLF3xkqMu796PC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zZmDX6sJfGTe5K3NMPXtrp
          claim_id: c_BhngePQwq824Ano5qAp3TR
          source_id: s_LrXVeZAKgNxTqQ6xTfH7kn
          stance: supports
          locator: 条文：条文识读（妻）
          quotation: 娶韓氏
          interpretation_note: null
          source:
            id: s_LrXVeZAKgNxTqQ6xTfH7kn
            source_type: website
            title: 中文维基百科：王瓘
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%93%98
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:51.888Z
            metadata_json: null
      object_person:
        id: p_VUpUP7oSKLF3xkqMu796PC
        status: active
        display_name: 韓氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_NAHmUvc2meBkSaabq4yRhs
        subject_person_id: p_WyCKD5sjpnwPoeEX7Portb
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_LNfZ5qzHVynGTRpmH784JC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_99uKiXCqfCPvL5jv85LY3d
          claim_id: c_NAHmUvc2meBkSaabq4yRhs
          source_id: s_LrXVeZAKgNxTqQ6xTfH7kn
          stance: supports
          locator: 条文：条文识读（祖）（2世）
          quotation: 祖父王義剛
          interpretation_note: null
          source:
            id: s_LrXVeZAKgNxTqQ6xTfH7kn
            source_type: website
            title: 中文维基百科：王瓘
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%93%98
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:51.888Z
            metadata_json: null
      object_person:
        id: p_WyCKD5sjpnwPoeEX7Portb
        status: active
        display_name: 王義剛
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王瓘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王瓘（1422年—？），字廷用，河南河南府陝州人，軍籍，明朝政治人物。同進士出身。 | accepted |
| name.primary | 王瓘 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MZ5fRBokK8Fw8dv1gYuPnt | 王郁 | accepted |
| spouses | p_VUpUP7oSKLF3xkqMu796PC | 韓氏 | accepted |
| ancestors | p_WyCKD5sjpnwPoeEX7Portb | 王義剛 | accepted |

## 外部来源

- [中文维基百科：王瓘](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%93%98)
