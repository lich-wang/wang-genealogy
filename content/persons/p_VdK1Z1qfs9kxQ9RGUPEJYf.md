---
schema: wang-person/v1
id: p_VdK1Z1qfs9kxQ9RGUPEJYf
status: active
merged_into: null
display_name: 王國安
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_24foTzAaD5L1h2RhqHdAoF
        subject_person_id: p_VdK1Z1qfs9kxQ9RGUPEJYf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國安
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D4GKQ1C3cD2wAwewLbdVSe
          claim_id: c_24foTzAaD5L1h2RhqHdAoF
          source_id: s_oTEXfz1mTeXDqtgsKFFPyg
          stance: supports
          locator: CBDB:57170
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（57170）
          source: &a1
            id: s_oTEXfz1mTeXDqtgsKFFPyg
            source_type: api_record
            title: 中国历代人物传记资料库：王國安（CBDB 57170）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57170&o=json
            external_identifier: CBDB:57170
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.795Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_iknoNU12JUz9pvFC58X259
        subject_person_id: p_VdK1Z1qfs9kxQ9RGUPEJYf
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1709年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T7uvAX3VR9uoiMQDGvXcH9
          claim_id: c_iknoNU12JUz9pvFC58X259
          source_id: s_oTEXfz1mTeXDqtgsKFFPyg
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
        id: c_TVnUb2GcmdRPAobfdCCbCD
        subject_person_id: p_VdK1Z1qfs9kxQ9RGUPEJYf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王國安（卒于1709年），清人物。籍贯蓋州衛，入仕學校: 生員(庠生)，曾任府尹。（中国历代人物传记资料库 CBDB 57170）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9CImu-oFIhGvsw0mJqaFyq
          claim_id: c_TVnUb2GcmdRPAobfdCCbCD
          source_id: s_oTEXfz1mTeXDqtgsKFFPyg
          stance: supports
          locator: CBDB:57170
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
  ancestors: []
  descendants: []
  other: []
---

# 王國安

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國安 | accepted |
| death.date | 1709年 | accepted |
| bio.summary | 王國安（卒于1709年），清人物。籍贯蓋州衛，入仕學校: 生員(庠生)，曾任府尹。（中国历代人物传记资料库 CBDB 57170） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國安（CBDB 57170）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57170&o=json)
