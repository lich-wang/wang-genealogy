---
schema: wang-person/v1
id: p_ycGgNxfxozdfaZd69tXQfq
status: active
merged_into: null
display_name: 王乃餘
cbdb_id: 30037
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pKgKnzsR2k8mVCqRs9cHg6
        subject_person_id: p_ycGgNxfxozdfaZd69tXQfq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王乃餘，史料所见人物。本项目依据《中国历代人物传记资料库：王乃餘（CBDB 30037）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_XSmQsFjle31mU3mHtaOsrs
          claim_id: c_pKgKnzsR2k8mVCqRs9cHg6
          source_id: s_mrmqLxrbuhmZp5ybZkBChH
          stance: supports
          locator: CBDB:30037
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_mrmqLxrbuhmZp5ybZkBChH
            source_type: api_record
            title: 中国历代人物传记资料库：王乃餘（CBDB 30037）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30037&o=json
            external_identifier: CBDB:30037
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_JFb62e4Rok6inJnYvjoRaq
        subject_person_id: p_ycGgNxfxozdfaZd69tXQfq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王乃餘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_q2KuHHjpfMGCJpckP63nzh
          claim_id: c_JFb62e4Rok6inJnYvjoRaq
          source_id: s_mrmqLxrbuhmZp5ybZkBChH
          stance: supports
          locator: CBDB:30037
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_u6SvNS48EvLBK6N94rSy7F
        subject_person_id: p_ZnaCSm3v5Qph1XYC7gvdB7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ycGgNxfxozdfaZd69tXQfq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jBtmhkGEsOdyRWMJ-YuDPm
          claim_id: c_u6SvNS48EvLBK6N94rSy7F
          source_id: s_Bk6wzAhJ9ErfzZFAZ8vBr9
          stance: supports
          locator: CBDB 双向互证（子 王乃餘 ⇄ 父 王兆辰）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_Bk6wzAhJ9ErfzZFAZ8vBr9
            source_type: api_record
            title: 中国历代人物传记资料库：王兆辰（CBDB 30036）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30036&o=json
            external_identifier: CBDB:30036
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.016Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ZnaCSm3v5Qph1XYC7gvdB7
        status: active
        display_name: 王兆辰
        merged_into_person_id: null
  children:
    - claim:
        id: c_McNkgNsf-NT9hgvZpMv3Q2
        subject_person_id: p_ycGgNxfxozdfaZd69tXQfq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZrVPMZwm7fGRq1QgALGJYj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1LAGrpsp5XfiF5RCm29AHf
          claim_id: c_McNkgNsf-NT9hgvZpMv3Q2
          source_id: s_4j1cy1km4tGC52MrB9xXNd
          stance: supports
          locator: CBDB 双向互证（父 王乃餘 ⇄ 子 王采）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_4j1cy1km4tGC52MrB9xXNd
            source_type: api_record
            title: 中国历代人物传记资料库：王采（CBDB 30038）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30038&o=json
            external_identifier: CBDB:30038
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.016Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ZrVPMZwm7fGRq1QgALGJYj
        status: active
        display_name: 王采
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王乃餘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王乃餘，史料所见人物。本项目依据《中国历代人物传记资料库：王乃餘（CBDB 30037）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王乃餘 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZnaCSm3v5Qph1XYC7gvdB7 | 王兆辰 | accepted |
| children | p_ZrVPMZwm7fGRq1QgALGJYj | 王采 | accepted |

## 外部来源

- [中国历代人物传记资料库：王采（CBDB 30038）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30038&o=json)
- [中国历代人物传记资料库：王乃餘（CBDB 30037）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30037&o=json)
- [中国历代人物传记资料库：王兆辰（CBDB 30036）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30036&o=json)
