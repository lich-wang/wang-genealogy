---
schema: wang-person/v1
id: p_nMSUAzmjPJ3W1rJhj7JaCe
status: active
merged_into: null
display_name: 王陞
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_D3EJJngPpykkfUmAYeD5bn
        subject_person_id: p_nMSUAzmjPJ3W1rJhj7JaCe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王陞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yUsMc3hhFUiu4dJC5fL5Xy
          claim_id: c_D3EJJngPpykkfUmAYeD5bn
          source_id: s_Uz1MdJkSg4YVCAKBqB6tuT
          stance: supports
          locator: CBDB:343589
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343589）
          source: &a1
            id: s_Uz1MdJkSg4YVCAKBqB6tuT
            source_type: api_record
            title: 中国历代人物传记资料库：王陞（CBDB 343589）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343589&o=json
            external_identifier: CBDB:343589
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.415Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_utTMG62bJBSUynHGA3VH1E
        subject_person_id: p_nMSUAzmjPJ3W1rJhj7JaCe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王陞，明人物。明清進士進士，籍贯華亭，入仕進士，曾任兵部郎中、兵部主事、太僕寺少卿。（中国历代人物传记资料库 CBDB 343589）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_a5SJiVa_5PRcMFuYOdwgh8
          claim_id: c_utTMG62bJBSUynHGA3VH1E
          source_id: s_Uz1MdJkSg4YVCAKBqB6tuT
          stance: supports
          locator: CBDB:343589
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
  descendants:
    - claim:
        id: c_uir1DlBTBrwjn6L4UC72tm
        subject_person_id: p_nMSUAzmjPJ3W1rJhj7JaCe
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DjjvyNFfAS41RfzRz1yEYu
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GYJlwhTY_e3yYOV4Hnak00
          claim_id: c_uir1DlBTBrwjn6L4UC72tm
          source_id: s_KLGz9BR8HFF4EZVMaXTUXQ
          stance: supports
          locator: 江南通志，lgid=65760：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KLGz9BR8HFF4EZVMaXTUXQ
            source_type: api_record
            title: 中国历代人物传记资料库：王日藻（CBDB 59944）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=59944&o=json
            external_identifier: CBDB:59944
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.839Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DjjvyNFfAS41RfzRz1yEYu
        status: active
        display_name: 王日藻
        merged_into_person_id: null
  other: []
---

# 王陞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王陞 | accepted |
| bio.summary | 王陞，明人物。明清進士進士，籍贯華亭，入仕進士，曾任兵部郎中、兵部主事、太僕寺少卿。（中国历代人物传记资料库 CBDB 343589） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_DjjvyNFfAS41RfzRz1yEYu | 王日藻 | accepted |

## 外部来源

- [中国历代人物传记资料库：王日藻（CBDB 59944）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=59944&o=json)
- [中国历代人物传记资料库：王陞（CBDB 343589）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343589&o=json)
