---
schema: wang-person/v1
id: p_b8H4aR4pJtzL6EUvA55cyk
status: active
merged_into: null
display_name: 王文質
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vyNB1Gt43KEEEidFBW1DoT
        subject_person_id: p_b8H4aR4pJtzL6EUvA55cyk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文質
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_i6vDzbZQNnLnBEsq6JLw7c
          claim_id: c_vyNB1Gt43KEEEidFBW1DoT
          source_id: s_3T1k5xNUXbMd8ZX3sBqPYj
          stance: supports
          locator: CBDB:149687
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（149687）
          source: &a1
            id: s_3T1k5xNUXbMd8ZX3sBqPYj
            source_type: api_record
            title: 中国历代人物传记资料库：王文質（CBDB 149687）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149687&o=json
            external_identifier: CBDB:149687
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.795Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7ijv8HiC9tN13TENQqoW9m
        subject_person_id: p_b8H4aR4pJtzL6EUvA55cyk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文質，唐人物。籍贯芒山。（中国历代人物传记资料库 CBDB 149687）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_64L87tP9-CarB_hrJwH1-u
          claim_id: c_7ijv8HiC9tN13TENQqoW9m
          source_id: s_3T1k5xNUXbMd8ZX3sBqPYj
          stance: supports
          locator: CBDB:149687
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_rpQICZCSVPsAh3l-KamR1U
        subject_person_id: p_MkN2fuPTu4u4GXiJ2MF3JH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_b8H4aR4pJtzL6EUvA55cyk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LUfYaGJXGvZ03t6mQw_lVz
          claim_id: c_rpQICZCSVPsAh3l-KamR1U
          source_id: s_3T1k5xNUXbMd8ZX3sBqPYj
          stance: supports
          locator: 唐代墓誌匯編:二卷，Changshou 21：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MkN2fuPTu4u4GXiJ2MF3JH
        status: active
        display_name: 王貞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王文質

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文質 | accepted |
| bio.summary | 王文質，唐人物。籍贯芒山。（中国历代人物传记资料库 CBDB 149687） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MkN2fuPTu4u4GXiJ2MF3JH | 王貞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文質（CBDB 149687）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149687&o=json)
