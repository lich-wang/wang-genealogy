---
schema: wang-person/v1
id: p_r1Eok1MVUkgv9Psaq8rq3F
status: active
merged_into: null
display_name: 王紹祖
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mCjzYGNYAoWH6TQjZbpFoP
        subject_person_id: p_r1Eok1MVUkgv9Psaq8rq3F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹祖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HU4J6ihYRR3Kd7uFVDbUrh
          claim_id: c_mCjzYGNYAoWH6TQjZbpFoP
          source_id: s_8ofiJ5JfznNAojkrW1ajzR
          stance: supports
          locator: CBDB:385911
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（385911）
          source: &a1
            id: s_8ofiJ5JfznNAojkrW1ajzR
            source_type: api_record
            title: 中国历代人物传记资料库：王紹祖（CBDB 385911）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385911&o=json
            external_identifier: CBDB:385911
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.886Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bMvVTXRfRp7VFUntg1EFGB
        subject_person_id: p_r1Eok1MVUkgv9Psaq8rq3F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹祖，史料所见人物。本项目依据《中国历代人物传记资料库：王紹祖（CBDB 385911）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xtfOp-KM6JeYNUwrVd70N8
          claim_id: c_bMvVTXRfRp7VFUntg1EFGB
          source_id: s_8ofiJ5JfznNAojkrW1ajzR
          stance: supports
          locator: CBDB:385911
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
  spouses: []
  ancestors:
    - claim:
        id: c_ovm0NcPqlVE50miEGV8TCT
        subject_person_id: p_TXTXwSryWLUp2Edx6YAYPe
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_r1Eok1MVUkgv9Psaq8rq3F
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VA_m0_9UKExHktVKIYC_kF
          claim_id: c_ovm0NcPqlVE50miEGV8TCT
          source_id: s_8ofiJ5JfznNAojkrW1ajzR
          stance: supports
          locator: 全宋文，卷 5677：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TXTXwSryWLUp2Edx6YAYPe
        status: active
        display_name: 王永年
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王紹祖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹祖 | accepted |
| bio.summary | 王紹祖，史料所见人物。本项目依据《中国历代人物传记资料库：王紹祖（CBDB 385911）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_TXTXwSryWLUp2Edx6YAYPe | 王永年 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紹祖（CBDB 385911）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385911&o=json)
