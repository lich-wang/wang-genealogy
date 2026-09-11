---
schema: wang-person/v1
id: p_mFSHoPn5Jqw4hkRXyDHt7h
status: active
merged_into: null
display_name: 王德威
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fev1W8Xe5WiqkAjJ4HQwK4
        subject_person_id: p_mFSHoPn5Jqw4hkRXyDHt7h
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德威
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aB7DeWbP15MTpgQdVeHnuq
          claim_id: c_fev1W8Xe5WiqkAjJ4HQwK4
          source_id: s_eKpooTi2ARKHxPc19GFgzL
          stance: supports
          locator: CBDB:121072
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（121072）
          source: &a1
            id: s_eKpooTi2ARKHxPc19GFgzL
            source_type: api_record
            title: 中国历代人物传记资料库：王德威（CBDB 121072）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121072&o=json
            external_identifier: CBDB:121072
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.909Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8AuDXC2VKZ944MRx52Kc35
        subject_person_id: p_mFSHoPn5Jqw4hkRXyDHt7h
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德威，史料所见人物。本项目依据《中国历代人物传记资料库：王德威（CBDB 121072）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_o7NJ9RlWxskNfvu_VYdIJE
          claim_id: c_8AuDXC2VKZ944MRx52Kc35
          source_id: s_eKpooTi2ARKHxPc19GFgzL
          stance: supports
          locator: CBDB:121072
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_ObVoukiq9EILGavgbZB19l
        subject_person_id: p_mFSHoPn5Jqw4hkRXyDHt7h
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_jzMkShch3F6GVhJ3WZPNUh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iHQPaqn_V0YnZLe6fJ0GSj
          claim_id: c_ObVoukiq9EILGavgbZB19l
          source_id: s_5Cyk-7L0UutWMOZm1Vlglr
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #2315, HuWenKai #810：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5Cyk-7L0UutWMOZm1Vlglr
            source_type: api_record
            title: 中国历代人物传记资料库：權氏(王德威妻)（CBDB 121071）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121071&o=json
            external_identifier: CBDB:121071
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jzMkShch3F6GVhJ3WZPNUh
        status: active
        display_name: 權氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王德威

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德威 | accepted |
| bio.summary | 王德威，史料所见人物。本项目依据《中国历代人物传记资料库：王德威（CBDB 121072）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_jzMkShch3F6GVhJ3WZPNUh | 權氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：權氏(王德威妻)（CBDB 121071）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121071&o=json)
- [中国历代人物传记资料库：王德威（CBDB 121072）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121072&o=json)
