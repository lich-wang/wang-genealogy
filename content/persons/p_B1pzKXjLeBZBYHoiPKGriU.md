---
schema: wang-person/v1
id: p_B1pzKXjLeBZBYHoiPKGriU
status: active
merged_into: null
display_name: 王紱
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_q4FZFFHPtGTY8s1QF9FT33
        subject_person_id: p_B1pzKXjLeBZBYHoiPKGriU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bC4SntEKY37Avsth1qkWUJ
          claim_id: c_q4FZFFHPtGTY8s1QF9FT33
          source_id: s_ko19Jq6KoZ9MFefzGBRbEv
          stance: supports
          locator: CBDB:121041
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（121041）
          source: &a1
            id: s_ko19Jq6KoZ9MFefzGBRbEv
            source_type: api_record
            title: 中国历代人物传记资料库：王紱（CBDB 121041）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121041&o=json
            external_identifier: CBDB:121041
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.908Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Fj2U148km79ENWdJYP2mFs
        subject_person_id: p_B1pzKXjLeBZBYHoiPKGriU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紱，史料所见人物。本项目依据《中国历代人物传记资料库：王紱（CBDB 121041）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ivPFwPFJL_hPGNKPqJR3UR
          claim_id: c_Fj2U148km79ENWdJYP2mFs
          source_id: s_ko19Jq6KoZ9MFefzGBRbEv
          stance: supports
          locator: CBDB:121041
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ZlbEA0fb_B6Ij7R-ScA0an
        subject_person_id: p_B1pzKXjLeBZBYHoiPKGriU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AyVBXEpeKMi8zdLGnLqfxr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HXGHT5iVYVHsx9TlSUCmKe
          claim_id: c_ZlbEA0fb_B6Ij7R-ScA0an
          source_id: s_8a6KE6skS5ewP33uWPMkKF
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #4121, HuWenKai #132：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8a6KE6skS5ewP33uWPMkKF
            source_type: api_record
            title: 中国历代人物传记资料库：王瑞貞（CBDB 121042）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121042&o=json
            external_identifier: CBDB:121042
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_AyVBXEpeKMi8zdLGnLqfxr
        status: active
        display_name: 王瑞貞
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_mnIdX4-xIBRZl5ejtQMAN0
        subject_person_id: p_B1pzKXjLeBZBYHoiPKGriU
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_HnPaGpWKz42coVDSPoCb3F
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8evHuwlBrdWpT6hMfP_J_I
          claim_id: c_mnIdX4-xIBRZl5ejtQMAN0
          source_id: s_QzJ0BmGUZZ6vL5OYW-5uZ_
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #4121, HuWenKai #132：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QzJ0BmGUZZ6vL5OYW-5uZ_
            source_type: api_record
            title: 中国历代人物传记资料库：姚氏(王紱妻)（CBDB 121038）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121038&o=json
            external_identifier: CBDB:121038
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HnPaGpWKz42coVDSPoCb3F
        status: active
        display_name: 姚氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王紱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紱 | accepted |
| bio.summary | 王紱，史料所见人物。本项目依据《中国历代人物传记资料库：王紱（CBDB 121041）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_AyVBXEpeKMi8zdLGnLqfxr | 王瑞貞 | accepted |
| spouses | p_HnPaGpWKz42coVDSPoCb3F | 姚氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紱（CBDB 121041）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121041&o=json)
- [中国历代人物传记资料库：王瑞貞（CBDB 121042）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121042&o=json)
- [中国历代人物传记资料库：姚氏(王紱妻)（CBDB 121038）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121038&o=json)
