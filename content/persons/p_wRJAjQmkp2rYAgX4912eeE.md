---
schema: wang-person/v1
id: p_wRJAjQmkp2rYAgX4912eeE
status: active
merged_into: null
display_name: 王澈
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WiLFbjrMDAoGL86MmPuM4L
        subject_person_id: p_wRJAjQmkp2rYAgX4912eeE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5a3NBfypu8mQN1uMN5dLZj
          claim_id: c_WiLFbjrMDAoGL86MmPuM4L
          source_id: s_LSt74EoCACP5EEhrqMb4VM
          stance: supports
          locator: CBDB:639220
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639220）
          source: &a1
            id: s_LSt74EoCACP5EEhrqMb4VM
            source_type: api_record
            title: 中国历代人物传记资料库：王澈（CBDB 639220）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639220&o=json
            external_identifier: CBDB:639220
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.886Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_i7RiDW65kZt5SEGUtXGdjm
        subject_person_id: p_wRJAjQmkp2rYAgX4912eeE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澈，清人物。籍贯桐城，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639220）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9kO18aAn2-_Lhk_OExcggZ
          claim_id: c_i7RiDW65kZt5SEGUtXGdjm
          source_id: s_LSt74EoCACP5EEhrqMb4VM
          stance: supports
          locator: CBDB:639220
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

# 王澈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澈 | accepted |
| bio.summary | 王澈，清人物。籍贯桐城，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639220） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王澈（CBDB 639220）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639220&o=json)
