---
schema: wang-person/v1
id: p_BVo3P1rTLnR5yWXE7paCRv
status: active
merged_into: null
display_name: 王濟民
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_B6J84u1QCDyrLYgwFr9CH2
        subject_person_id: p_BVo3P1rTLnR5yWXE7paCRv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濟民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8s4eChUNmpLwoconLZ7mLS
          claim_id: c_B6J84u1QCDyrLYgwFr9CH2
          source_id: s_218Uyqt5MhLQB3mdJxPEGa
          stance: supports
          locator: CBDB:557757
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（557757）
          source: &a1
            id: s_218Uyqt5MhLQB3mdJxPEGa
            source_type: api_record
            title: 中国历代人物传记资料库：王濟民（CBDB 557757）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557757&o=json
            external_identifier: CBDB:557757
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.683Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MRnHbDa5HmYwnK7M49tN4G
        subject_person_id: p_BVo3P1rTLnR5yWXE7paCRv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濟民，史料所见人物。本项目依据《中国历代人物传记资料库：王濟民（CBDB 557757）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KCYcqFyaI-SnRxdL7h_vR9
          claim_id: c_MRnHbDa5HmYwnK7M49tN4G
          source_id: s_218Uyqt5MhLQB3mdJxPEGa
          stance: supports
          locator: CBDB:557757
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_HuGE-ggLFEtggkmqmwLwRB
        subject_person_id: p_BVo3P1rTLnR5yWXE7paCRv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_c8kvY5ESoiii9c6m9JhP2A
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e58IIt1ijsqKdPNkANstTT
          claim_id: c_HuGE-ggLFEtggkmqmwLwRB
          source_id: s_218Uyqt5MhLQB3mdJxPEGa
          stance: supports
          locator: (乾隆)信陽州志，lgid=868520：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_c8kvY5ESoiii9c6m9JhP2A
        status: active
        display_name: 王弼
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_D-EaTBwpUzf3HqCE0GVA-U
        subject_person_id: p_BVo3P1rTLnR5yWXE7paCRv
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_iHe6tY3fRQ5DPM5JoEnDQ6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9K_WlRi9RiQteWEAxmg2x4
          claim_id: c_D-EaTBwpUzf3HqCE0GVA-U
          source_id: s_98ibL1Btwe_BJ5JqqZ1hyA
          stance: supports
          locator: (乾隆)信陽州志，lgid=868520：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_98ibL1Btwe_BJ5JqqZ1hyA
            source_type: api_record
            title: 中国历代人物传记资料库：陳氏(王濟民妻)（CBDB 557760）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557760&o=json
            external_identifier: CBDB:557760
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_iHe6tY3fRQ5DPM5JoEnDQ6
        status: active
        display_name: 陳氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王濟民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濟民 | accepted |
| bio.summary | 王濟民，史料所见人物。本项目依据《中国历代人物传记资料库：王濟民（CBDB 557757）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_c8kvY5ESoiii9c6m9JhP2A | 王弼 | accepted |
| spouses | p_iHe6tY3fRQ5DPM5JoEnDQ6 | 陳氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳氏(王濟民妻)（CBDB 557760）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557760&o=json)
- [中国历代人物传记资料库：王濟民（CBDB 557757）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557757&o=json)
