---
schema: wang-person/v1
id: p_bvZr3eCG2oHdSr4AK2Rk3H
status: active
merged_into: null
display_name: 李氏
revision: 1
cbdb_id: 40324
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ubMe2YKe64GtM8Pe5_Pvc3
        subject_person_id: p_bvZr3eCG2oHdSr4AK2Rk3H
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏（1176—1231），宋人物。籍贯莆田，身份为士人、貞婦/節婦。（中国历代人物传记资料库 CBDB 40324）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yafINTH6mRNhBHSi3d3FGv
          claim_id: c_ubMe2YKe64GtM8Pe5_Pvc3
          source_id: s_DgRDIX_kgNHw2ip8J-DVPp
          stance: supports
          locator: CBDB:40324
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_DgRDIX_kgNHw2ip8J-DVPp
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王孝曾妻)（CBDB 40324）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=40324&o=json
            external_identifier: CBDB:40324
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_hjgOxUYsl3NZZB1XMWdfya
        subject_person_id: p_bvZr3eCG2oHdSr4AK2Rk3H
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bvSbiHJbSjQ7VwSzEtUo8b
          claim_id: c_hjgOxUYsl3NZZB1XMWdfya
          source_id: s_DgRDIX_kgNHw2ip8J-DVPp
          stance: supports
          locator: CBDB:40324
          quotation: null
          interpretation_note: CBDB 明确记录的王孝曾配偶
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
        id: c_O65xYKKFppf1a5Zb7Tuj0j
        subject_person_id: p_JpSK7vWCh5LB3Zzt4BGkQA
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_bvZr3eCG2oHdSr4AK2Rk3H
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H8l1SSKCzTYLbYz6CYvhbE
          claim_id: c_O65xYKKFppf1a5Zb7Tuj0j
          source_id: s_DgRDIX_kgNHw2ip8J-DVPp
          stance: supports
          locator: CBDB 双向互证（妻子 李氏(王孝曾妻)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_JpSK7vWCh5LB3Zzt4BGkQA
        status: active
        display_name: 王孝曾
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 李氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 李氏（1176—1231），宋人物。籍贯莆田，身份为士人、貞婦/節婦。（中国历代人物传记资料库 CBDB 40324） | accepted |
| name.primary | 李氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_JpSK7vWCh5LB3Zzt4BGkQA | 王孝曾 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王孝曾妻)（CBDB 40324）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=40324&o=json)
