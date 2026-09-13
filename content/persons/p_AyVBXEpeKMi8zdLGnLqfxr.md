---
schema: wang-person/v1
id: p_AyVBXEpeKMi8zdLGnLqfxr
status: active
merged_into: null
display_name: 王瑞貞
cbdb_id: 121042
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yRr6orMSofMDBkVpeRX7xj
        subject_person_id: p_AyVBXEpeKMi8zdLGnLqfxr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑞貞，史料所见人物。本项目依据《中国历代人物传记资料库：王瑞貞（CBDB 121042）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_q5cB2xb_ZMbL42au9Gxwx_
          claim_id: c_yRr6orMSofMDBkVpeRX7xj
          source_id: s_8a6KE6skS5ewP33uWPMkKF
          stance: supports
          locator: CBDB:121042
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_b9oGS2msxT23JDsL4atP5z
        subject_person_id: p_AyVBXEpeKMi8zdLGnLqfxr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑞貞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_syhnk6M9HXjXFjWvq8fqwJ
          claim_id: c_b9oGS2msxT23JDsL4atP5z
          source_id: s_8a6KE6skS5ewP33uWPMkKF
          stance: supports
          locator: CBDB:121042
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1901-2000）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_B1pzKXjLeBZBYHoiPKGriU
        status: active
        display_name: 王紱
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瑞貞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王瑞貞，史料所见人物。本项目依据《中国历代人物传记资料库：王瑞貞（CBDB 121042）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王瑞貞 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_B1pzKXjLeBZBYHoiPKGriU | 王紱 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑞貞（CBDB 121042）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121042&o=json)
