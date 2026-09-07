---
schema: wang-person/v1
id: p_iQ1km9C2raqPCH2o2kf8Kd
status: active
merged_into: null
display_name: 王乃譽
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jQOXzF2NA312T5Jdj1eoQN
        subject_person_id: p_iQ1km9C2raqPCH2o2kf8Kd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王乃譽，史料所见人物。本项目依据《王国维》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_0KHou-zPW6O6vmN8L9A6MY
          claim_id: c_jQOXzF2NA312T5Jdj1eoQN
          source_id: s_jdk8ev2sE9kNUT1en7UxxV
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_jdk8ev2sE9kNUT1en7UxxV
            source_type: website
            title: 中文维基百科：王国维
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%9B%BD%E7%BB%B4
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:16.704Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_h4mebhHSNMz3JhQ8vAzXDr
        subject_person_id: p_iQ1km9C2raqPCH2o2kf8Kd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王乃譽
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jj1EFnH84ehybTVsqMRHPG
          claim_id: c_h4mebhHSNMz3JhQ8vAzXDr
          source_id: s_jdk8ev2sE9kNUT1en7UxxV
          stance: supports
          locator: CBDB:null
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Cz4iPyAb22Lctw8uGgDKDS
        subject_person_id: p_iQ1km9C2raqPCH2o2kf8Kd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CRTiUFbJJTt5FqJL9A5xNr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_XKV1imh8U2gGsdkgaM9z4o
          claim_id: c_Cz4iPyAb22Lctw8uGgDKDS
          source_id: s_jdk8ev2sE9kNUT1en7UxxV
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 其父王乃譽精於書畫、篆刻、古文詩詞
          interpretation_note: null
          source:
            id: s_jdk8ev2sE9kNUT1en7UxxV
            source_type: website
            title: 中文维基百科：王国维
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%9B%BD%E7%BB%B4
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:16.704Z
            metadata_json: null
      object_person:
        id: p_CRTiUFbJJTt5FqJL9A5xNr
        status: active
        display_name: 王國維
        merged_into_person_id: null
    - claim:
        id: c_buEFQeG6WoQeWH8LGGTuXe
        subject_person_id: p_iQ1km9C2raqPCH2o2kf8Kd
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_9bEHGZTK31mDWHz8mBrGna
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cN9pG5nDQnGh8LgZmFtaYv
          claim_id: c_buEFQeG6WoQeWH8LGGTuXe
          source_id: s_N7ar7TnZD6aBMMQoMUHjyK
          stance: supports
          locator: 注释·王国华
          quotation: 健，即王国华（1886-1979），字健安，王国维异母弟。
          interpretation_note: 王国华与王国维为异母兄弟，沿用库内王国维之父王乃誉作为共同父亲。
          source:
            id: s_N7ar7TnZD6aBMMQoMUHjyK
            source_type: website
            title: 中国作家网：王国维家书中的王国华
            creator: null
            publisher: 中国作家网
            published_at_text: null
            canonical_url: https://www.chinawriter.com.cn/n1/2020/0731/c419382-31805400.html
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T02:14:47.143Z
            metadata_json: null
      object_person:
        id: p_9bEHGZTK31mDWHz8mBrGna
        status: active
        display_name: 王国华
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王乃譽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王乃譽，史料所见人物。本项目依据《王国维》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王乃譽 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_CRTiUFbJJTt5FqJL9A5xNr | 王國維 | accepted |
| children | p_9bEHGZTK31mDWHz8mBrGna | 王国华 | accepted |

## 外部来源

- [中国作家网：王国维家书中的王国华](https://www.chinawriter.com.cn/n1/2020/0731/c419382-31805400.html)
- [中文维基百科：王国维](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%9B%BD%E7%BB%B4)
