---
schema: wang-person/v1
id: p_dGeVmKUMk8CpVvhVSEDqhC
status: active
merged_into: null
display_name: 王之奇
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NayLPT1sGP9mJUpRmQ56Cy
        subject_person_id: p_dGeVmKUMk8CpVvhVSEDqhC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之奇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kgXE9DHnrzgwoY5MeSfNUv
          claim_id: c_NayLPT1sGP9mJUpRmQ56Cy
          source_id: s_FMJ2LAaN3BtytRAcDPqkKV
          stance: supports
          locator: CBDB:13756
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（13756）
          source: &a1
            id: s_FMJ2LAaN3BtytRAcDPqkKV
            source_type: api_record
            title: 中国历代人物传记资料库：王之奇（CBDB 13756）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13756&o=json
            external_identifier: CBDB:13756
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.627Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_YpjRsR7HzpRrm548vTEeHL
        subject_person_id: p_dGeVmKUMk8CpVvhVSEDqhC
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1173年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zgbb1FMLZB3rjekAWPYRyL
          claim_id: c_YpjRsR7HzpRrm548vTEeHL
          source_id: s_FMJ2LAaN3BtytRAcDPqkKV
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kYTagr2ctsuB6GXVGbkQVd
        subject_person_id: p_dGeVmKUMk8CpVvhVSEDqhC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王之奇（卒于1173年），宋人物。籍贯都昌，入仕科舉學校: 恩賜出身、特賜出身等，曾任安撫使、端明殿學士、右奉議郎。（中国历代人物传记资料库 CBDB 13756）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_95cjWl-Hd1C7UULcDtxdDP
          claim_id: c_kYTagr2ctsuB6GXVGbkQVd
          source_id: s_FMJ2LAaN3BtytRAcDPqkKV
          stance: supports
          locator: CBDB:13756
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_VuOB3H6dtJ-aW7m3-4379L
        subject_person_id: p_YyANARVNyNvBnk5riMJd4z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dGeVmKUMk8CpVvhVSEDqhC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7GoRJ7D2WfRdydQOnYQyuQ
          claim_id: c_VuOB3H6dtJ-aW7m3-4379L
          source_id: s_FMJ2LAaN3BtytRAcDPqkKV
          stance: supports
          locator: CBDB 双向互证（父 王庶 ⇄ 子 王之奇）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_YyANARVNyNvBnk5riMJd4z
        status: active
        display_name: 王庶
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王之奇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之奇 | accepted |
| death.date | 1173年 | accepted |
| bio.summary | 王之奇（卒于1173年），宋人物。籍贯都昌，入仕科舉學校: 恩賜出身、特賜出身等，曾任安撫使、端明殿學士、右奉議郎。（中国历代人物传记资料库 CBDB 13756） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_YyANARVNyNvBnk5riMJd4z | 王庶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王之奇（CBDB 13756）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13756&o=json)
