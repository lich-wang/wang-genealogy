---
schema: wang-person/v1
id: p_8vyDFoA9sK1kQi3gjQvrix
status: active
merged_into: null
display_name: 王得凝
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1Cx2VZ1ugURLyQK6QmoGyP
        subject_person_id: p_8vyDFoA9sK1kQi3gjQvrix
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得凝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Yo3hLZfDnHPVND2uevAQ83
          claim_id: c_1Cx2VZ1ugURLyQK6QmoGyP
          source_id: s_d5feNfJB8JBMCJh56ikwqz
          stance: supports
          locator: CBDB:695612
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（695612）
          source: &a1
            id: s_d5feNfJB8JBMCJh56ikwqz
            source_type: api_record
            title: 中国历代人物传记资料库：王得凝（CBDB 695612）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=695612&o=json
            external_identifier: CBDB:695612
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.540Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JLHNjdHuHt728r859EzSZR
        subject_person_id: p_8vyDFoA9sK1kQi3gjQvrix
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得凝，宋人物。曾任郊社齋郎。（中国历代人物传记资料库 CBDB 695612）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Du084SPI2SgBkFxVQol9ii
          claim_id: c_JLHNjdHuHt728r859EzSZR
          source_id: s_d5feNfJB8JBMCJh56ikwqz
          stance: supports
          locator: CBDB:695612
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_WxZP-zFUdISEKiY-wACZcu
        subject_person_id: p_tmq6Wnq1CjinFj62NTxvnd
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_8vyDFoA9sK1kQi3gjQvrix
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ffRSkKYML7KDh4Q5T7WSXA
          claim_id: c_WxZP-zFUdISEKiY-wACZcu
          source_id: s_d5feNfJB8JBMCJh56ikwqz
          stance: supports
          locator: 鄖溪集，右侍禁贈工部侍郎王公墓志銘：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tmq6Wnq1CjinFj62NTxvnd
        status: active
        display_name: 王师颜
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王得凝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王得凝 | accepted |
| bio.summary | 王得凝，宋人物。曾任郊社齋郎。（中国历代人物传记资料库 CBDB 695612） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_tmq6Wnq1CjinFj62NTxvnd | 王师颜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王得凝（CBDB 695612）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=695612&o=json)
