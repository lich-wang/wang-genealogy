---
schema: wang-person/v1
id: p_Dzmr4JaLF7L2JJGUiewcMk
status: active
merged_into: null
display_name: 王宗望
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kmZ2Ks83hMDtHFJ3Jskzsh
        subject_person_id: p_Dzmr4JaLF7L2JJGUiewcMk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗望
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_93LKk8L1QvGHWo4H8pkhYr
          claim_id: c_kmZ2Ks83hMDtHFJ3Jskzsh
          source_id: s_oWjiruiG2j6dH5GVRSpR48
          stance: supports
          locator: CBDB:700511
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（700511）
          source: &a1
            id: s_oWjiruiG2j6dH5GVRSpR48
            source_type: api_record
            title: 中国历代人物传记资料库：王宗望（CBDB 700511）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700511&o=json
            external_identifier: CBDB:700511
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.776Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6JbPNJW2LKU4xK8TvLKpEJ
        subject_person_id: p_Dzmr4JaLF7L2JJGUiewcMk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗望，宋人物。入仕進士。（中国历代人物传记资料库 CBDB 700511）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ojn7PwvFpM0Wjp2nNUzGXk
          claim_id: c_6JbPNJW2LKU4xK8TvLKpEJ
          source_id: s_oWjiruiG2j6dH5GVRSpR48
          stance: supports
          locator: CBDB:700511
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
  spouses:
    - claim:
        id: c_HZsbkgnXHspOID_hjXAHw-
        subject_person_id: p_Dzmr4JaLF7L2JJGUiewcMk
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_fUstE2172L567aVFEGPTgm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v1GHqDQ8n7rxEbGGPh4N31
          claim_id: c_HZsbkgnXHspOID_hjXAHw-
          source_id: s_O-hm-ZffFRsQkJMD-8_SMu
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，北宋卷 210 李中吉墓誌：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_O-hm-ZffFRsQkJMD-8_SMu
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(李中吉三女)（CBDB 701781）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=701781&o=json
            external_identifier: CBDB:701781
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fUstE2172L567aVFEGPTgm
        status: active
        display_name: 李氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王宗望

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗望 | accepted |
| bio.summary | 王宗望，宋人物。入仕進士。（中国历代人物传记资料库 CBDB 700511） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_fUstE2172L567aVFEGPTgm | 李氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(李中吉三女)（CBDB 701781）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=701781&o=json)
- [中国历代人物传记资料库：王宗望（CBDB 700511）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700511&o=json)
